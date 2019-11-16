const prettier = require("prettier");

const parseImport = code => {
  let importList = [];
  let _content, _index;
  while (code) {
    _content = code.match(/(?<=#import\s\()[\s\S]+?(?=\))/m);
    if (!_content) {
      code = "";
      continue;
    }
    _index = code.indexOf("#import");
    code = code.substring(_index);
    _index = code.indexOf(")");
    const list = _content[0].trim().split(",");
    importList = importList.concat(list);
    code = code.substring(_index + 1);
    continue;
  }
  return importList;
};

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

const parseFunc = (source, mac, imp) => {
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
  // 取出宏 和 依赖
  const MACRO = parseMacro(md);
  const importList = parseImport(md);
  // 将接口信息解析成AST
  return [parseFunc(md, MACRO), importList];
};

const AST2API = (ast, imp) => {
  let API = "";
  API +=
    imp
      .map(item => {
        if (~item.indexOf("=")) {
          const [name, packName] = item.split("=");
          return `import ${name.trim()} from '${packName.trim()}'`;
        }
        return `import ${item.trim()} from '${item.trim()}'`;
      })
      .join("\n") + "\n";
  API += ast
    .map(data => {
      if (data.method === "get") {
        return `/**${data.note}*/
              export const ${data.name} = data => {
                  http.get('${data.url}?' + qs.stringify({
                      ${data.params.map(item => item.name).join(", ")}
                  })).then(res => {
                      return res
                  }).catch(err => {
                      throw new Error(err)
                  })
              }
              `;
      } else {
        return `/**${data.note}*/
              export const ${data.name} = data => {
                  http.${data.method}('${data.url}', {
                      ${data.params.map(item => item.name).join(", ")}
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
