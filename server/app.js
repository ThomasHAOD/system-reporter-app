const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  let data = JSON.stringify({
    message: 'Loaded at',
    time: new Date().getSeconds(),
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
