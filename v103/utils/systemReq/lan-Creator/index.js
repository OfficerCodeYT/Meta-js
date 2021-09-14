const { sys, sysLogger, sysLoggerWarn } = require("../../../ladenjs/system/loggers/systemLogger");
const { storage } = require("../../../user.config")

const CreatorVersion = {
    Version: "1.0"
}

let SystemStorage = 100;
let LadenServerHoster = 50;
let LadenServer = 10 ;

let total = SystemStorage - LadenServerHoster - LadenServer;

module.exports = {
    total,
    CreatorVersion

}