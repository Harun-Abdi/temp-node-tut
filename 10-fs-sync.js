
const {readFileSync, writeFileSync} = require("fs")

console.log("start");

/* Overstående kan også skrives på følgende måde:

const fs = require("fs")
fs.readFileSync
*/

const first = readFileSync("./content/first.txt", "utf-8")
const second = readFileSync("./content/second.txt", "utf-8")


writeFileSync(
    "./content/result-sync.txt",
     `Here is the result : ${first}, ${second}`, {flag: "a"})

console.log("Done with this task");
console.log("Starting the next one..");

