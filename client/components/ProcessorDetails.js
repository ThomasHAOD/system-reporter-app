import React from 'react';

const ProcessorDetails = ({ processorData }) => {
  const { numOfCpus, averageSpeedInGHz } = processorData;

  const processor = <div className='processor'>{averageSpeedInGHz}</div>;

  const processors = [];

  for (let i = 0; i < numOfCpus; i++) {
    processors.push(processor);
  }

  return (
    <div className='info-container'>
      <h2>Processors</h2>
      <div className='processors-container'>{processors}</div>
    </div>
  );
};

export default ProcessorDetails;
