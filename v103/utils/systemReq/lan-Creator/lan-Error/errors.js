const { sysLoggerError, sysLogger } = require("../../../../ladenjs/system/loggers/systemLogger");
const { storage } = require("../../../../user.config");

function errors() {
    if(storage.DServer > 0 ){
        sysLoggerError('Dserver: There is not storage set for the dev storage')
    } else {
        sysLogger('DServer: No Storage errors')
    }
    sysLogger('\n')
    if(storage.WServer > 0 ){
        sysLoggerError('There is not storage set for the dev storage')
    } else {
        sysLogger("WServer: No Storage errors")
    }
}

module.exports = {
    errors
}