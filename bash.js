const pwd = require("./pwd");
const ls = require("./ls");

process.stdout.write("\nprompt > ");

console.log(pwd);
console.log(ls);

pwd();
ls();
