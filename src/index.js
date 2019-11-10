const fs = require('fs')
const path = require('path')

const md = fs.readFileSync(path.join(__dirname, '../test/README.md'), 'utf-8')

const parseMacro = code => {
    const macro = {}
    let _name, _content, _index  
    while(code) {
        _name = code.match(/(?<=#define\s)[\s\S]+?(?=\s)/)
        if(!_name) {
            code = ''
            continue
        }
        if (_content = code.match(/(?<=#define)[\s\S]+?(?=#end)/m)) {
            macro[_name[0]] = _content[0]
            _index = code.indexOf('#end')
            code = code.substring(_index + 4)
        }
    }
    return macro
}

const parsePar = string => {
    let require = false
    const [name_type, note] = string.split('-')
    let [name, type] = name_type.split(':')
    if(!name.search(/[A-Z]/)) {
        name = name.slice(0,1).toLowerCase() + name.slice(1)
    }
    if(~name.indexOf('!')) {
        name = name.slice(0, name.length - 1)
        require = true
    }
    return {
        name: name.trim(), 
        require, 
        type: type ? type.split('|').map(item => item.trim()) : null, 
        note: note ? note.trim() : ''
    }
}

const parseFunc = (source, mac) => {
    const funcList = []
    /**
     * 1. 元信息
     */
    let meta, _index = 0, note, _par, func = {}
    while(source) {
        if(meta = source.match(/(?<=#{4}\s).+/)) {
            // 解析name、method、url
            const [name, method, url] = meta[0].split(' ')
            _index = source.search(/(?<=#{4}\s).+/)
            source = source.substring(_index + meta[0].length)
            Object.assign(func, {name, method, url})
        }
        note = source.match(/(?<=>\s)[\s\S]+?(?=\n)/m) || ''
        if(note) {
            !func.note && (func.note = '')
            func.note += note
            _index = source.search(/(?<=>\s)[\s\S]+?(?=\n)/m)
            source = source.substring(_index + note[0].length)
            continue
        }
        _par = source.match(/(?<=\*\s).+/)
        if(_par) {
            // 解析参数
            !func.params && (func.params = [])
            func.params.push(parsePar(_par[0]))
            _index = source.search(/(?<=\*\s).+/)
            source = source.substring(_index + _par[0].length)
            console.log(source)
            continue
        }
        source = ''
    }
    console.log(func)
    return func
}

const md2AST = md => {
    // 先取出宏
    const MACRO = parseMacro(md)
    // 将接口信息解析成AST
    const funcList = parseFunc(md, MACRO)

}

md2AST(md)