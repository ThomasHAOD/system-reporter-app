const http = require('http');

const port = 3000;

const memory = require('./system/memory');
const osInfo = require('./system/os');
const processors = require('./system/processors');
const system = require('./system/system');

const server = http.createServer((req, res) => {
  let data = JSON.stringify({
    memory: memory(),
    osInfo,
    processors,
    system: system(),
  });

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Content-Type', 'application/json');
  res.write(data);
  res.end();
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
