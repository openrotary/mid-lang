'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const prettier = require("prettier");

const addHeader = name => `
  // ${name} 项目 API代码
  import qs from 'qs'
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

const getParams = data =>
  data.data
    ? data.data.concat(data.queryParams || [])
    : [].concat(data.queryParams || []);

const addParams = data =>
  !data.length ? "" : `{ ${data.map(item => item.key).join(", ")} },`;

const isParamsNull = (data, name) =>
  data
    .map(
      item => `if (!${item.key}) {
        throw Error('${name} 请求缺失参数 ${item.key}')
      }`
    )
    .join("\n");

const handleUrl = (url, needCut = false) => {
  const _url = url.replace(/{{.+}}/, "").replace(/\?.+/, "");
  if (!needCut) {
    return _url;
  }
  const arr = _url.split("/");
  return arr.slice(0, arr.length - 1).join("/");
};

const handleParams = (data, method) => {
  if (method === "GET") {
    return data.length
      ? `{ params: { ${data.map(item => item.key).join(",")} }}`
      : `{}`;
  }
  return "{}";
};

const handleHeaders = (data, config) => {
  return data.length
    ? data
        .map(item => `'${item.key}': '${item.value}'`)
        .filter(item => !config.ignore.includes(item.key))
        .join(",")
    : "";
};

const AST2API = (_json, config) => {
  if (!config) {
    throw Error(`缺失配置文件`);
  }
  console.log(config);
  let json = {};
  try {
    json = JSON.parse(_json);
  } catch (error) {
    throw Error(error);
  }
  let result = "";
  result += addHeader(json.name);
  result += addAjaxLib(config.name);
  result += json.requests
    .map((item, i) => {
      const myParams = getParams(item);
      return `
    export const ajaxName${i + 1} = (${addParams(myParams)} config = {}) => {
      // ${item.name}   ${item.id}
      ${isParamsNull(myParams, item.name)}
      return new Promise((resolve, reject) => {
        ${config.core.name}.${item.method.toLowerCase()}(
          '${handleUrl(item.url)}',
          ${handleParams(myParams, item.method)},
          Object.assign({
            headers: {
              ${handleHeaders(item.headerData, config.headers)}
            } 
          }, config)
        )
        .then(res => resolve(res))
        .catch(err => reject(err))
      })
    }
    `;
    })
    .join("\n");
  // console.log(json.requests);
  // return result;
  return prettier.format(result, { parser: "babel" });
};

exports.AST2API = AST2API;
