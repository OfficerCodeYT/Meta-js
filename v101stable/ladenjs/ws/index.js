// Node.js socket server script
const net = require('net');
// Create a server object
const landenServer = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(data.toString());
  });
  socket.write('SERVER: Hello! This is server speaking.<br>');
  socket.end('SERVER: Closing connection now.<br>');
}).on('error', (err) => {
  console.error(err);
});
// Open server on port 9898
landenServer.listen(9898, () => {
  console.log('opened server on', landenServer.address().port);
});

module.exports = {
  landenServer
}