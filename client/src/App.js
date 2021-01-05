import React from 'react';
import useSystemReporter from '../hooks/useSystemReporter';
import ProcessorDetails from '../components/ProcessorDetails';
import RamUsage from '../components/RamUsage';
import SystemDetails from '../components/SystemDetails';
import './App.css';

const URL = 'http://localhost:8080';

const App = () => {
  const { memory, osInfo, processors, system } = useSystemReporter(URL);

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
