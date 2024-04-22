//import {div,mul} from "./lib.js"

// commonjs style
//const lib = require("./lib")

//console.log(lib);

//console.log(lib.sum(4,5), lib.diff(4,5));
//console.log(mul(4,5), div(4,5));

const lib = require("./lib.js");
const fs = require('fs');

//const txt = fs.readFileSync("data.txt",'utf-8');
fs.readFile('data.txt', 'utf-8', (err,txt) => {
    console.log(txt);
})
//console.log(txt);
console.log(lib.div(4,5), lib.mul(4,5));


