var a = 5;
console.log("Starting program");
// console.log("window", window);
// console.log("document", document);
// console.log("fetch", fetch);

// var fileAObject = require("./fileA.js");
// var car = fileAObject.car;
// var carBuilder = fileAObject.carBuilder;
// var { car, carBuilder } = require("./fileA.js");
// console.log(car);
// console.log(carBuilder);

let jsonUtil = require("./jsonUtil.js");
let o = { x: { y: 100 } };
jsonUtil.save("xy100.json", o);
