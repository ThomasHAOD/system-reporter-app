const system = require('os');

const memoryInformation = () => {
  const totalMemory = system.totalmem();

  const freeMemory = system.freemem();

  const memoryToGigabytes = (memory) => {
    const gigFactor = 1000000000;
    const memInGig = memory / gigFactor;
    return memInGig.toFixed(2);
  };

  const memoryUsage = 100 - (freeMemory / totalMemory) * 100;

  return {
    total: memoryToGigabytes(totalMemory),
    free: memoryToGigabytes(freeMemory),
    usage: memoryUsage.toFixed(2),
  };
};

module.exports = memoryInformation;
