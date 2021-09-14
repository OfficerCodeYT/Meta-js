const {ladenServer, LadenServerHoster } = require("./src/ws/index");
const { sysLogger , sysStart, sysLoggerWarn, sysLoggerError, sys} = require ("./loggers/systemLogger.js");

const LANwelcome = require('../../utils/systemReq/lan-welMsg.js')
const LANConsole = require('../../utils/systemReq/lan-ConsoleProfile');
const { total } = require("../../utils/systemReq/lan-Creator");
const { errors } = require("../../utils/systemReq/lan-Creator/lan-Error/errors");
 sysLoggerWarn('\n')
sysLogger("Your total space: " + total + "GB")
sysLoggerWarn('\n')