const http = require("http")

// req = incoming request from the client from the web browser
// res = what we send back
const server = http.createServer((req,res)=>{

    if (req.url === "/") {
        res.end("Welcome to our home page")
    }

    if (req.url === "/about") {
        res.end("Here's our about page")
        
    }
 
    res.end(`<h1> Opps! <h1> <a href="/"> back home </`)

})

server.listen(5000)