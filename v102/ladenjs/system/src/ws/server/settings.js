const { sysLoggerWarn, sysLoggerError } = require("../../../loggers/systemLogger");
const { ladenServer, LadenServerHoster } = require("../index");

ladenServer.maxConnections = "9",
ladenServer.setMaxListeners = "9";



LadenServerHoster.setMaxListeners = "0",
LadenServerHoster.maxConnections = "0";
