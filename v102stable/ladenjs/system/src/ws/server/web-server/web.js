const { count } = require('console');
const net = require('net');
const { Servers } = require('../../../../../../user.config');


const ladenServer = net.createServer((socket) => {
    socket.on('data', (data) => {
      console.log(data.toString());
    });
    socket.write('SERVER: Hello! This is server speaking.<br>');
    socket.end('SERVER: Closing connection now.<br>');
  }).on('error', (err) => {
    console.error(err);
  });
  ladenServer.listen(Servers.WPort, () => {
    console.log('Web server opened at: https://localhost: ' , ladenServer.address().port )
    console.warn("Current Listeners: " + ladenServer.getMaxListeners(count) + "/20")
  });

  module.exports = {
      ladenServer
  }