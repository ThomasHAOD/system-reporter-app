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

const osInformation = `Your Operating System username is ${username}. Your current system is ${osName}, release ${osRelease}.`;

module.exports = osInformation;
