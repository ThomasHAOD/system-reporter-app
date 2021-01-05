import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('First there was darkness, then...');

  const helloFetch = () => {
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: { Authorization: 'Bearer asdflkjasdf' },
      body: JSON.stringify({ message: 'Hello World' }),
    })
      .then((res) => {
        return res.json();
      })
      .then((body) => {
        console.log(body);
        setText(body.message);
      });
  };

  return (
    <div>
      <h1>System Reporter</h1>
      <button onClick={helloFetch}>Send POST Request</button>
      <h2>{text}</h2>
    </div>
  );
};

export default App;
