
const path = require("path")

//path to test.txt
const filePath = path.join("/content/", "subfolder", "test.txt")
console.log(filePath);

//base name aka test.txt
const base = path.basename(filePath)
console.log(base);

//absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute);