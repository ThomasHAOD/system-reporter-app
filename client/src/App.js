import React, { useState, useEffect } from 'react';
import ProcessorDetails from '../components/ProcessorDetails';
import RamUsage from '../components/RamUsage';
import SystemDetails from '../components/SystemDetails';
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
    <div className='App'>
      <h1>System Reporter</h1>
      <div className='data-container'>
        <RamUsage memoryData={memory} />
        <ProcessorDetails processorData={processors} />
        <SystemDetails osDetails={osInfo} systemData={system} />
      </div>
    </div>
  );
};

export default App;
