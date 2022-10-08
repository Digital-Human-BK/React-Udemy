import React, { useCallback, useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggleP, setAllowToggleP] = useState(false);

  console.log('APP RUNNING');

  const toggleP = useCallback(() => {
    if (allowToggleP) {
      setShowP((prev) => !prev);
    }
  }, [allowToggleP]);

  const allowToggle = useCallback(() => {
    setAllowToggleP((prev) => !prev);
    console.log('Allow Toggle');
  }, []);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <Button onClick={allowToggle}>Allow Toggle</Button>
      <br />
      <br />
      <Button onClick={toggleP}>Show Paragraph</Button>
      <DemoOutput show={showP} />
    </div>
  );
}

export default App;
