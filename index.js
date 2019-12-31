#!/usr/bin/env node

const fs = require("fs");
// const path = require("path");
const commander = require("commander");
const { AST2API } = require("./dist/index.js");

commander.version("1.0.0");

commander
  .command("build <md> <api>")
  .description("检查并获取配置文件")
  .action(async (mdName, apiName) => {
    const json = fs.readFileSync(`./${mdName}`, "utf-8");
    const config = require(`${process.cwd()}/mid.config.js`);
    // console.log(config);
    // const [funcList, importList] = md2AST(md);
    const code = AST2API(json, config);
    fs.writeFileSync(`./${apiName}`, code);
  });

// 用于解析命令行参数
commander.parse(process.argv);
