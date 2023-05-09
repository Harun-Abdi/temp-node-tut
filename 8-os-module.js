// OS Module
// setup

const { log } = require("console");
const os = require("os")

// info about current user 

const user = os.userInfo();


// method returns the syste uptime in seconds

const upTime = os.uptime()
console.log(upTime);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);