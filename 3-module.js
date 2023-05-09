
// CommonJS, every file in Node is module (by defualt)
// Modules - Encapsulated Code (only sharing what we want (minimum)

const names = require("./4-name")
const sayHi = require("./5-utils")

const data = require("./6-alternative-flavor")
require("./7-mind-grenade")

sayHi("Susan")
sayHi(names.john);
sayHi(names.peter);
