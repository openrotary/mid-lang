"use strict";

const prettier = require("prettier");

const parseMacro = code => {
  const macro = {};
  let _name, _content, _index;
  while (code) {
    _name = code.match(/(?<=#define\s)[\s\S]+?(?=\s)/);
    if (!_name) {
      code = "";
      continue;
    }
    if ((_content = code.match(/(?<=#define)[\s\S]+?(?=#end)/m))) {
      macro[_name[0]] = _content[0];
      _index = code.indexOf("#end");
      code = code.substring(_index + 4);
    }
  }
  return macro;
};

const parsePar = string => {
  let require = false;
  const [name_type, note] = string.split("-");
  let [name, type] = name_type.split(":");
  if (!name.search(/[A-Z]/)) {
    name = name.slice(0, 1).toLowerCase() + name.slice(1);
  }
  if (~name.indexOf("!")) {
    name = name.slice(0, name.length - 1);
    require = true;
  }
  return {
    name: name.trim(),
    require,
    type: type ? type.split("|").map(item => item.trim()) : null,
    note: note ? note.trim() : ""
  };
};

const parseFunc = (source, mac) => {
  const funcList = [];
  let meta,
    _index = 0,
    note,
    paras,
    func = {},
    res,
    status = 0;
  while (source) {
    res = source.match(/(\*\s.+)|(\#{4}\s.+?(?=\n))|(>\s[\s\S]+?(?=\n))/m);
    if (res) {
      if (!res[0].trim().indexOf("####")) {
        status = 1;
      }
      if (!res[0].trim().indexOf(">")) {
        status = 2;
      }
      if (!res[0].trim().indexOf("*")) {
        status = 3;
      }
    } else {
      source = "";
      if (Object.keys(func).length) {
        funcList.push(func);
        func = {};
      }
      continue;
    }
    if (status === 1) {
      // 先储存数据
      if (Object.keys(func).length) {
        funcList.push(func);
        func = {};
      }
      // 解析name、method、url
      meta = source.match(/(?<=#{4}\s).+/);
      const [name, method, url] = meta[0].split(" ");
      _index = source.search(/(?<=#{4}\s).+/);
      source = source.substring(_index + meta[0].length);
      Object.assign(func, { name, method, url });
    }

    if (status === 2) {
      note = source.match(/(?<=>\s)[\s\S]+?(?=\n)/m) || "";
      !func.note && (func.note = "");
      func.note += "\n" + note;
      _index = source.search(/(?<=>\s)[\s\S]+?(?=\n)/m);
      source = source.substring(_index + note[0].length);
      continue;
    }
    if (status === 3) {
      // 解析参数
      paras = source.match(/(?<=\*\s).+/);
      !func.params && (func.params = []);
      func.params.push(parsePar(paras[0]));
      _index = source.search(/(?<=\*\s).+/);
      source = source.substring(_index + paras[0].length);
      continue;
    }
  }
  return funcList;
};

const md2AST = md => {
  // 先取出宏
  const MACRO = parseMacro(md);
  // 将接口信息解析成AST
  return parseFunc(md);
};

const AST2API = (ast, mac) => {
  const API = ast
    .map(data => {
      const params = data.params.map(item => item.name).join(", ");
      if (data.method === "get") {
        return `/**${data.note}*/
              const ${data.name} = ({${params}}) => {
                  http.get('${data.url}', qs.stringify({
                      ${params}
                  })).then(res => {
                      return res
                  }).catch(err => {
                      throw new Error(err)
                  })
              }
              `;
      } else {
        return `/**${data.note}*/
              const ${data.name} = ({${params}}) => {
                  http.${data.method}('${data.url}', {
                      ${params}
                  }).then(res => {
                      return res
                  }).catch(err => {
                      throw new Error(err)
                  })
              }
              `;
      }
    })
    .join("\n");
  return prettier.format(API, { semi: false, parser: "babel" });
};

module.exports = {
  md2AST,
  AST2API
};
