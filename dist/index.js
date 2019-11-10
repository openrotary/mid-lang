'use strict';

const fs = require('fs');
const path = require('path');

const md = fs.readFileSync(path.join(__dirname, '../test/README.md'), 'utf-8');

const parseMacro = code => {
    const macro = {};
    let _name, _content, _index;  
    while(code) {
        _name = code.match(/(?<=#define\s)[\s\S]+?(?=\s)/);
        if(!_name) {
            code = '';
            continue
        }
        if (_content = code.match(/(?<=#define)[\s\S]+?(?=#end)/m)) {
            macro[_name[0]] = _content[0];
            _index = code.indexOf('#end');
            code = code.substring(_index + 4);
        }
    }
    return macro
};

const parsePar = string => {
    let require = false;
    const [name_type, note] = string.split('-');
    let [name, type] = name_type.split(':');
    if(!name.search(/[A-Z]/)) {
        name = name.slice(0,1).toLowerCase() + name.slice(1);
    }
    if(~name.indexOf('!')) {
        name = name.slice(0, name.length - 1);
        require = true;
    }
    return {
        name: name.trim(), 
        require, 
        type: type ? type.split('|').map(item => item.trim()) : null, 
        note: note ? note.trim() : ''
    }
};

const parseFunc = (source, mac) => {
    const funcList = [];
    /**
     * 1. 元信息
     */
    let meta, _index = 0, note, paras, func = {}, res, status = 0;
    while(source) { 
        res = source.match(/(\*\s.+)|(\#{4}\s.+?(?=\n))|(>\s[\s\S]+?(?=\n))/m);
        if(res) {
            if(!res[0].trim().indexOf('####')) {
                status = 1;
            }
            if(!res[0].trim().indexOf('>')) {
                status = 2;
            }
            if(!res[0].trim().indexOf('*')) {
                status = 3;
            }
        } else {
            source = '';
            if (Object.keys(func).length) {
                funcList.push(func);
                func = {};
            } 
            continue
        }
        if(status === 1) {
            // 先储存数据
            if (Object.keys(func).length) {
                funcList.push(func);
                func = {};
            } 
            // 解析name、method、url
            meta = source.match(/(?<=#{4}\s).+/);
            const [name, method, url] = meta[0].split(' ');
            _index = source.search(/(?<=#{4}\s).+/);
            source = source.substring(_index + meta[0].length);
            Object.assign(func, {name, method, url});
        }
        
        if(status === 2) {
            note = source.match(/(?<=>\s)[\s\S]+?(?=\n)/m) || '';
            !func.note && (func.note = '');
            func.note += '\n' + note;
            _index = source.search(/(?<=>\s)[\s\S]+?(?=\n)/m);
            source = source.substring(_index + note[0].length);
            continue
        }
        if(status === 3) {
            // 解析参数
            paras = source.match(/(?<=\*\s).+/);
            !func.params && (func.params = []);
            func.params.push(parsePar(paras[0]));
            _index = source.search(/(?<=\*\s).+/);
            source = source.substring(_index + paras[0].length);
            continue
        }
        
    }
    return funcList
};

const md2AST = md => {
    // 先取出宏
    const MACRO = parseMacro(md);
    // 将接口信息解析成AST
    const funcList = parseFunc(md);
    console.log('funcList', funcList);
};

md2AST(md);
