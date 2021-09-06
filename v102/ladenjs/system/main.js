
const {ladenServer, LadenServerHoster } = require("./src/ws/index");
console.clear();
const { sysLogger , sysStart, sysLoggerWarn, sysLoggerError, sys} = require ("./loggers/systemLogger.js");
const { error } = require("./src/ws/server/settings");


sysLogger("Welcome to " + sys.Name);

sysLoggerError('Web server is under development' ); ladenServer.close();


