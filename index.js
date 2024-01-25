const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('aaa Hello, this is your Node.js server running on port 2500!\n');
});

const PORT = 2500;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
