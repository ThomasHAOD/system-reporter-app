import React from 'react';
import './App.css';

const App = () => {
  const helloFetch = () => {
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: { Authorization: 'Bearer asdflkjasdf' },
      body: JSON.stringify({ message: 'Hello World' }),
    }).then((res) => {
      const reader = res.body.getReader();
      console.log(reader);
    });
  };

  return (
    <div>
      <h1>System Reporter</h1>
      <button onClick={helloFetch}>Send POST Request</button>
    </div>
  );
};

export default App;
