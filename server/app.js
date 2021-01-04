const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  let data = '';
  req.on('data', (chunk) => {
    console.log(chunk);
    data += chunk;
  });
  req.on('end', () => {
    console.log(data);
  });
  res.setHeader('test-header', 'testing');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');

  res.end();
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
