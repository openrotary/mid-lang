#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const commander = require("commander");
const { md2AST, AST2API } = require("./dist/index.js");

commander.version("1.0.0");

commander
  .command("build <md> <api>")
  .description("检查并获取配置文件")
  .action(async (mdName, apiName) => {
    const md = fs.readFileSync(`./${mdName}`, "utf-8");
    const [funcList, importList] = md2AST(md);
    const code = AST2API(funcList, importList);
    fs.writeFileSync(`./${apiName}`, code);
  });

// 用于解析命令行参数
commander.parse(process.argv);
