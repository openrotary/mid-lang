const prettier = require("prettier");
import { ErrorStyle, SuccessStyle } from "./utils.js";

const addErrorTips = name =>
  `console.log(\'%c Error: ${name} 请求报错 %c\', '${ErrorStyle}', '')`;

const addSuccessTips = name =>
  `console.log(\'%c Success: ${name} 请求成功 %c \\n\', '${SuccessStyle}', '', res)`;

const addHeader = name => `
  // ${name} 项目 API代码
  import qs from 'qs'

    function deepObjectMerge(FirstOBJ, SecondOBJ) {
        // 深度合并对象
        for (var key in SecondOBJ) {
            FirstOBJ[key] =
                FirstOBJ[key] && FirstOBJ[key].toString() === '[object Object]'
                    ? deepObjectMerge(FirstOBJ[key], SecondOBJ[key])
                    : (FirstOBJ[key] = SecondOBJ[key])
        }
        return FirstOBJ
    }
  `;

const addAjaxLib = config => {
  if (!config) {
    return `import axios from 'axios'`;
  }
  if (!config.name || !config.importUrl) {
    throw Error("core字段缺少配置 name 或 importUrl");
  }
  return `
  import ${config.name} from '${config.importUrl}'
  `;
};

const getParams = data => {
  if (data.dataMode === "raw" && data.rawModeData) {
    const list = Object.keys(JSON.parse(data.rawModeData)).map(item => ({
      key: item
    }));
    return list;
  }
  return data.data
    ? data.data.concat(data.queryParams || [])
    : [].concat(data.queryParams || []);
};

const addParams = data => {
  // console.log("datall", data);
  return !data.length ? "" : `{ ${data.map(item => item.key).join(", ")} },`;
};

const addCutParams = status => (status ? `uid,` : "");

const isParamsNull = (data, name, status = false) => {
  let list = data.slice();
  if (status) {
    list.push({ key: "uid" });
  }
  return list
    .filter(item => !!item.enabled)
    .map(
      item => `if (!${item.key}) {
        throw Error('${name} 请求缺失参数 ${item.key}')
      }`
    )
    .join("\n");
};

const isHeaderParmasNull = (name, headerData, configData) => {
  if (!configData.ignore || !configData.ignore.length) {
    return "";
  }
  const headerList = headerData
    ? headerData
        .map(item => item.key)
        .filter(item => configData.ignore.includes(item))
    : [];
  return headerList
    .map(
      item => `if(!config.headers || !config.headers.${item}) {
    throw Error('${name} 缺失头请求参数 ${item}')
  }`
    )
    .join("\n");
};

const handleUrl = (url, needCut = false) => {
  const _url = url.replace(/{{.+}}/, "").replace(/\?.+/, "");
  if (!needCut) {
    return `'${_url}'`;
  }
  const arr = _url.split("/");
  return "`" + arr.slice(0, arr.length - 1).join("/") + "/${uid}" + "`";
};

const handleParams = (data, config) => {
  if (config.method === "POST" && config.dataMode === "raw") {
    // console.log("===", data instanceof Array);
    return data.length ? `{ ${data.map(item => item.key).join(",")} }` : "{}";
  }
  if (config.method === "GET") {
    return data.length
      ? `{ params: { ${data.map(item => item.key).join(",")} }}`
      : `{}`;
  }
  if (config.method === "POST" && config.dataMode === "urlencoded") {
    // post 请求参数序列化
    return data.length
      ? `qs.stringify({${data.map(item => item.key).join(",")}})`
      : null;
  }
  return data.length ? `{${data.map(item => item.key).join(",")}}` : null;
};

const handleHeaders = (data, config) => {
  return data.length
    ? data
        .filter(item =>
          config.ignore ? !config.ignore.includes(item.key) : true
        )
        .map(item => `'${item.key}': '${item.value}'`)
        .join(",")
    : "";
};

const AST2API = (_json, config) => {
  if (!config) {
    throw Error(`缺失配置文件`);
  }
  // console.log(config);
  let json = {};
  try {
    json = JSON.parse(_json);
  } catch (error) {
    throw Error(error);
  }
  let result = "";
  result += addHeader(json.name);
  result += addAjaxLib(config.core);
  result += json.requests
    .map((item, i) => {
      const myParams = getParams(item);
      const needCut = config.slice ? config.slice.includes(item.id) : false;
      const httpName = `HTTP_${item.id.slice(-5)}`;
      return `
    export const ${httpName} = (${addParams(myParams)} ${addCutParams(
        needCut
      )} config = {}) => {
      // ${item.name}   ${item.id}
      ${isParamsNull(myParams, item.name, needCut)}
      ${isHeaderParmasNull(item.name, item.headerData, config.headers)}
      return new Promise((resolve, reject) => {
        ${config.core.name}.${item.method.toLowerCase()}(
          ${handleUrl(item.url, needCut)},
          ${handleParams(myParams, item)},
          deepObjectMerge({
            headers: {
              ${handleHeaders(item.headerData, config.headers)}
            }
          }, config)
        )
        .then(res => {
          ${config.dev ? addSuccessTips(httpName) : ""}
          resolve([res, null])
        })
        .catch(err => {
          ${config.dev ? addErrorTips(httpName) : ""}
          console.log(new Error())
          reject([null, err])
        })
      })
    }
    `;
    })
    .join("\n");
  // console.log(json.requests);
  // return result;
  return prettier.format(result, { parser: "babel" });
};
export { AST2API };
