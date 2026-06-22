
import {useRef, useEffect, useState} from 'react';
import './App.css'
import { useCallback } from 'react';

function App() {
  const ref = useRef(null);
  const [value, setValue] = useState('Murad');

  useEffect(() => {
    console.log('ref', ref.current)
    ref.current.focus();
  }, []);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const checkCorrectName = useCallback(() => {
    console.log('value', value)
  }, [value]);
  
  console.log('render');
  return (
    <>
    <input placeholder='Name' ref={ref} value={value} onChange={onChange}/>
    <button onClick={checkCorrectName}>Check</button>
    </>
  );
}

export default App
