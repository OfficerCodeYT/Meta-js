const sys = {
    Name: "LadenJS - System Logger "
}

function sysLogger(message){
    console.log(message);
}
function sysLoggerWarn(message){
    console.warn(message)
}
function sysLoggerError(message){
    console.error(message)
}

module.exports = {
    sysLogger,
    sysLoggerWarn,
    sysLoggerError,
    sys
}