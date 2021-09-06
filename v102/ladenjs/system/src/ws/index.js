// Node.js socket server script
const { count } = require('console');
const net = require('net');
const sys = require('../../loggers/systemLogger')
const cfg = require('../../../../user.config.json')
// Create a server object
const ladenServer = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(data.toString());
  });
  socket.write('SERVER: Hello! This is server speaking.<br>');
  socket.end('SERVER: Closing connection now.<br>');
}).on('error', (err) => {
  console.error(err);
});
ladenServer.listen(320, () => {
  console.log('Web server opened at: https://localhost: ' , ladenServer.address().port )
  console.warn("Current Listeners: " + ladenServer.getMaxListeners(count) + "/20")
});

const LadenServerHoster = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(data.toString());
  });
  socket.write('SERVER: Hello! This is server speaking.<br>');
  socket.end('SERVER: Closing connection now.<br>');
}).on('error', (err) => {
  console.error(err);
});
LadenServerHoster.listen(321, () => {
  
  console.log('Dev server opened at: https://localhost: ' , LadenServerHoster.address().port );
  console.warn("Current listeners: " + LadenServerHoster.getMaxListeners(count)+ "/20");
});

LadenServerHoster.on('connection', (socket) => {
  console.log(sysStart.Name + "  Has been added to the server")
})




module.exports = {
  ladenServer,
  LadenServerHoster
}