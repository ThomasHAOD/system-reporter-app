import React from 'react';

const ProcessorDetails = ({ processorData }) => {
  const { numOfCpus, averageSpeedInGHz } = processorData;

  const processors = [];

  for (let i = 0; i < numOfCpus; i++) {
    const processor = (
      <div className='processor' key={i}>
        {averageSpeedInGHz}
      </div>
    );
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
