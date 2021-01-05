import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [text, setText] = useState('not loaded');
  const [time, setTime] = useState('First there was darkness, then...');

  const helloFetch = async () => {
    const data = await fetch('http://localhost:3000/', {
      method: 'get',
      headers: { Authorization: 'Bearer asdflkjasdf' },
    });
    const body = await data.json();

    setText(body.message);
    setTime(body.time);
  };

  useEffect(() => {
    setInterval(() => {
      helloFetch();
    }, 1000);
  }, []);

  return (
    <div>
      <h1>System Reporter</h1>
      <h2>{text}</h2>
      <h2>{time}</h2>
    </div>
  );
};

export default App;
