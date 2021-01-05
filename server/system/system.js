const system = require('os');

const otherSystemInfo = () => {
  const homeDirectory = system.homedir();

  const systemUptime = system.uptime();

  const uptimeInHours = systemUptime / 3600;

  return `Your home directory is ${homeDirectory} and your system has been live for ${uptimeInHours.toFixed(
    3
  )} hours.`;
};

module.exports = otherSystemInfo;
