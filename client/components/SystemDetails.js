import React from 'react';

const SystemDetails = ({ systemData, osDetails }) => {
  const { homeDirectory, uptimeInHours } = systemData;
  const { osName, osRelease, username } = osDetails;

  return (
    <div className='info-container'>
      <h2>System Information</h2>
      <h3>
        Operating System: {osName} Release: {osRelease}
      </h3>
      <h3>Username: {username}</h3>
      <h3>Home Directory: {homeDirectory}</h3>
      <h3>Up Time: {uptimeInHours}hrs</h3>
    </div>
  );
};

export default SystemDetails;
