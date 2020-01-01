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

const addCutParams = status => (status ? `uid,` : "");

const isParamsNull = (data, name, status = false) => {
  let list = data.slice();
  if (status) {
    list.push({ key: "uid" });
  }
  return list
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
      return `
    export const ajaxName${i + 1} = (${addParams(myParams)} ${addCutParams(
        needCut
      )} config = {}) => {
      // ${item.name}   ${item.id}
      ${isParamsNull(myParams, item.name, needCut)}
      ${isHeaderParmasNull(item.name, item.headerData, config.headers)}
      return new Promise((resolve, reject) => {
        ${config.core.name}.${item.method.toLowerCase()}(
          ${handleUrl(item.url, needCut)},
          ${handleParams(myParams, item)},
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
