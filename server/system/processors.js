const system = require('os');

const cpus = system.cpus();

//on this Mac at least the number of objects listed is double the cores, so likely each is a thread
const numOfCpus = cpus.length / 2;

const getAverageSpeed = () => {
  const cumulativeSpeed = cpus.reduce((acc, cpu) => {
    return acc + cpu.speed;
  }, 0);

  return cumulativeSpeed / (numOfCpus * 2);
};

const averageSpeedInGHz = getAverageSpeed() / 1000;

const cpuInformation = `You have ${numOfCpus} processors or cores runnning at an average of ${averageSpeedInGHz}GHz.`;

module.exports = cpuInformation;
