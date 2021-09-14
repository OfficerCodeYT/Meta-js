const net = require('net');
const util = require('util')
const { count } = require('console');
const { sysLogger } = require('../../../../loggers/systemLogger');
const { Servers} = require('../../../../../../user.config')
const { ladenServer } = require('../web-server/web');
const LadenServerHoster = net.createServer((socket) => {
    socket.on('data', (data) => {
      console.log(data.toString());
    });
    socket.write('SERVER: Hello! This is server speaking.<br>');
    socket.end('SERVER: Closing connection now.<br>');
  }).on('error', (err) => {
    console.error(err);
  });
  LadenServerHoster.listen(Servers.DPort, () => {
    
    console.log('Dev server opened at: https://localhost: ' , LadenServerHoster.address().port );
    console.warn("Current listeners: " + LadenServerHoster.getMaxListeners(count)+ "/20");
  });


  
  LadenServerHoster.on('connection', (socket) => {
    console.log(sysStart.Name + "  Has been added to the server"),
    console.profileEnd(ladenServer);
  })




  module.exports = {
      LadenServerHoster
  }
  