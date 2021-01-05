import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [memory, setMemory] = useState('not loaded');
  const [osInfo, setOSinfo] = useState('not loaded');
  const [processors, setProcessors] = useState('not loaded');
  const [system, setSystem] = useState('not loaded');

  const helloFetch = async () => {
    const data = await fetch('http://localhost:3000/', {
      method: 'get',
      headers: { Authorization: 'Bearer asdflkjasdf' },
    });
    const body = await data.json();

    setMemory(body.memory);
    setOSinfo(body.osInfo);
    setProcessors(body.processors);
    setSystem(body.system);
  };

  useEffect(() => {
    setInterval(() => {
      helloFetch();
    }, 1000);
  }, []);

  return (
    <div>
      <h1>System Reporter</h1>
      <h2>{memory}</h2>
      <h2>{osInfo}</h2>
      <h2>{processors}</h2>
      <h2>{system}</h2>
    </div>
  );
};

export default App;
