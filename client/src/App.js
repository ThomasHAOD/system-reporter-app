import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('First there was darkness, then...');

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000', ['json']);

    socket.addEventListener('open', () => {
      console.log('opening');
      const data = { message: 'Hello from the client!' };
      const json = JSON.stringify(data);
      socket.send(json);
    });
    socket.onopen = () => {
      console.log('opening');
      const data = { message: 'Hello from the client!' };
      const json = JSON.stringify(data);
      socket.send(json);
    };

    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
    });
  });

  const helloSocket = async () => {
    //  fetch('http://localhost:3000/', {
    //    method: 'GET',
    //    headers: {
    //      Authorization: 'Bearer asdflkjasdf',
    //      Connection: 'Upgrade',
    //      Upgrade: 'websocket',
    //      'Sec-WebSocket-Accept': 'm9raz0Lr21hfqAitCxWigVwhppA=',
    //      'Sec-WebSocket-Protocol': 'json',
    //    },
    //  }).then((res) => console.log('res', res));
  };

  return (
    <div>
      <h1>System Reporter</h1>
      <button>Send POST Request</button>
      <h2>{text}</h2>
    </div>
  );
};

export default App;
