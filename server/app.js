const http = require('http');
const crypto = require('crypto');

const port = 3000;

const server = http.createServer((req, res) => {
  req.addListener('end', () => {}).resume();
});

server.on('upgrade', function (req, socket) {
  if (req.headers['upgrade'] !== 'websocket') {
    socket.end('HTTP/1.1 400 Bad Request');
    return;
  }

  const responseHeaders = [
    'HTTP/1.1 101 Web Socket Protocol Handshake',
    'Upgrade: WebSocket',
    'Connection: Upgrade',
    `Sec-WebSocket-Accept: *`,
  ];

  socket.write(responseHeaders.join('\r\n'));
  socket.emit('message', 'hello');
  //   socket.send('open');
});

server.on('data', (buffer) => {
  const message = parseMessage(buffer);
  if (message) {
    // For our convenience, so we can see what the client sent
    console.log(message);
    // We'll just send a hardcoded message in this example
    // socket.write(constructReply({ message: 'Hello from the server!' }));
    // } else if (message === null) {
    //     console.log('WebSocket connection closed by the client.');
  }
});
//   const data = { message: 'Hello from the server!' };
//   const json = JSON.stringify(data);
//   socket.write(json);
// });

server.listen(port);
