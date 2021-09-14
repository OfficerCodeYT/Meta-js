const config = require("../../user.config.js");
const { sysLogger, sys, sysLoggerWarn } = require("../../ladenjs/system/loggers/systemLogger");
const { count } = require("console");
const { ladenServer } = require("../../ladenjs/system/src/ws/server/web-server/web.js");
const package = require('../../package.json')


console.clear();

sysLogger("Welcome to LadenJs" + " " + config.Author.Name ),
sysLogger("Resgistred Date: " + config.Author.RegisterDate);
sysLoggerWarn('\n')
sysLogger("LadenJS Version: " + package.version)
sysLogger('Made By: ' + package.author)
sysLoggerWarn('\n')


