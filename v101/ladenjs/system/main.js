const { ladenServer } = require("../http");

console.log("Server Connections : " + ladenServer.connections + "\n")
console.log("Server Listener Count: " + ladenServer.listenerCount + "\n")