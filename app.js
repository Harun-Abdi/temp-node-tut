const EventEmitter = require("events");

const customEmitter = EventEmitter();
customEmitter.on("response", () =>{
    console.log(`data recieved`);
})

customEmitter.emit("response")