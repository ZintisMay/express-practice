let jsonUtil = require("./jsonUtil");
let fileToLoad = process.argv[2];

console.log(fileToLoad);

let json = jsonUtil.load(fileToLoad);

console.log(json);
