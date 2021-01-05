import React from 'react';

const RamUsage = ({ memoryData }) => {
  const { total, free, usage } = memoryData;

  const calculateColor = (percent) => {
    const float = parseFloat(percent);
    // console.log(typeof float);

    if (float < 70) return 'green';
    if (float < 80) return 'yellow';
    if (float < 95) return 'orange';
    return 'red';
  };

  const color = calculateColor(usage);
  // console.log(color);
  return (
    <div className='info-container'>
      <h2>RAM</h2>
      <h3>Total: {total}Gb</h3>
      <h3>Free: {free}Gb</h3>
      <h3>
        Usage:
        <svg width='300' height='20' style={{ border: '1px solid black' }}>
          <rect
            width={parseFloat(usage) * 3 || 0}
            height='20'
            style={{ fill: color }}
          />
        </svg>
        {usage}%
      </h3>
    </div>
  );
};

export default RamUsage;
