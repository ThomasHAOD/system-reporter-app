import React from 'react';

const RamUsage = ({ memoryData }) => {
  const { total, free, usage } = memoryData;

  return (
    <div className='info-container'>
      <h2>RAM</h2>
      <h3>Total: {total}Gb</h3>
      <h3>Free: {free}Gb</h3>
      <h3>
        Usage:
        <svg width='300' height='20' style={{ border: '1px solid black' }}>
          <rect
            width={parseInt(usage) * 3}
            height='20'
            style={{ fill: `red` }}
          />
        </svg>
        {usage}%
      </h3>
    </div>
  );
};

export default RamUsage;
