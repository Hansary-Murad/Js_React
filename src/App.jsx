
import { useState } from 'react';
import './App.css'

function App() {
  const [toggle, setToggle] = useState(true);


  return (
    <>
    <button onClick={() => setToggle(!toggle)}>{toggle ? "Вкл" : "Выкл"}</button>
    </>
  );
}

export default App
