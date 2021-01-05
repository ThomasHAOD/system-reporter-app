const system = require('os');

const otherSystemInfo = () => {
  const homeDirectory = system.homedir();

  const systemUptime = system.uptime();

  const uptimeInHours = (systemUptime / 3600).toFixed(2);

  return { homeDirectory, uptimeInHours };
};

module.exports = otherSystemInfo;
