const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello from Node!');
}

const server = http.createServer(requestListener);
server.listen(8090);
console.log('listening at http://localhost:8090/')