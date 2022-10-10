import React, { useCallback, useMemo, useState } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggleP, setAllowToggleP] = useState(false);
  const [listTitle, setListTitle] = useState('My List');

  const items = useMemo(() => [5, 3, 1, 10, 8], []);

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

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <Button onClick={allowToggle}>Allow Toggle</Button>
      <br />
      <br />
      <Button onClick={toggleP}>Show Paragraph</Button>
      <DemoOutput show={showP} />
      <br />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <DemoList title={listTitle} items={items} />
    </div>
  );
}

export default App;
