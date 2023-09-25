const { readFileSync, writeFileSync, read } = require("fs");
console.log('start')
// read a file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

// write a file
writeFileSync(
  "./content/result-sync.txt",
  `\nHere is the result: ${first}\n${second}\n`,
  { flag: "a" }
);

console.log('done')
console.log('start')
