import { useEffect, useState } from 'react';

const useSystemReporter = (url) => {
  const [memory, setMemory] = useState({});
  const [osInfo, setOSinfo] = useState({});
  const [processors, setProcessors] = useState({});
  const [system, setSystem] = useState({});

  const helloFetch = async () => {
    const data = await fetch(url, {
      method: 'get',
    });
    const body = await data.json();

    setMemory(body.memory);
    setOSinfo(body.osInfo);
    setProcessors(body.processors);
    setSystem(body.system);
  };

  useEffect(() => {
    setInterval(() => {
      helloFetch();
    }, 1000);
  }, []);

  return { memory, osInfo, processors, system };
};

export default useSystemReporter;
