const prettier = require("prettier");

const renderHeader = header =>
  header.map(item => `'${item.key}': '${item.value}'`).join(",\n");

// 生成传入参数
const renderParamsIn = data =>
  !data || !data.length ? "" : `{${data.map(item => item.key).join(",")}}`;

// 生成参数判断代码
const renderParamsCheck = (data, apiName) =>
  data
    ? data
        .map(
          item => `if (!${item.key}) {
    throw Error('${apiName} 接口缺失参数 ${item.key}')
}`
        )
        .join("")
    : "";

const AST2API = (_json, config) => {
  if (config) {
    console.log(config);
  }
  let json = {};
  try {
    json = JSON.parse(_json);
  } catch (error) {
    throw Error(error);
  }
  let result = "";
  // 注释头信息
  result += `// ${json.name} API 代码\n\n`;
  result += json.requests
    .map(
      (item, i) => `
      const ajaxName${i} = (${renderParamsIn(item.data)}) => {
    // ${item.name}
    ${renderParamsCheck(item.data, item.name)}
    axios.${item.method.toLowerCase()}('${item.url
        .replace(/{{.+}}/, "")
        .replace(/\?.+/, "")}', {
          headers: {
              ${renderHeader(item.headerData)}
          }
      }).then(res => res)
      .catch(err => console.error(err))
    }`
    )
    .join("\n");
  return prettier.format(result, { parser: "babel" });
};

export { AST2API };
