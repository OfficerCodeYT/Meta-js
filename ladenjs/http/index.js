var http = require('http');
var ladenServer = http.createServer(function (req, res) {
    res.write('Laden Servers are online!'); //write a response to the client
    res.end(); //end the response
  res.end();
}).listen(8080);

module.exports = {
    ladenServer
}