const fs = require("fs");
const path = require("path");

const md = fs.readFileSync(path.join(__dirname, "../test/README.md"), "utf-8");

import { md2AST, AST2API } from "./complier";
const funcList = md2AST(md);
const code = AST2API(funcList);

console.log(code);
