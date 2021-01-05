const os = require('os');

const osMapping = {
  Linux: 'Linux',
  Darwin: 'MacOS',
  Windows_NT: 'Windows',
};

const osCode = os.type();

const getOsName = (code) => osMapping[code];

const osName = getOsName(osCode);

const osRelease = os.release();

const username = os.userInfo().username;

const osInformation = { osName, osRelease, username };

module.exports = osInformation;
