import React, { Component, useState  } from 'react';
import Log from './Trainning/DAY1';
import Mounting from './Trainning/DAY2';



function App() {
  const [mount, setMount] = useState(false)
  return (
    <div className="App">
      <button onClick={(e) => setMount(!mount)}>Click me</button>
      {mount && <Mounting />}
    </div>
  );
}

export default App;
