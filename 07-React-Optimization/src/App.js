import React, { useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showP, setShowP] = useState(false);
  console.log('APP RUNNING');
  const toggleP = () => {
    setShowP(prev => !prev);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}/>
      <Button onClick={toggleP}>Show Paragraph</Button>
    </div>
  );
}

export default App;
