import { useEffect, useLayoutEffect, useMemo, useState} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect');
  }, []);
  
  useEffect(() => {
    console.log('useEffect update count', count);
  }, [count]);
  
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  }, []);
  
  const message = useMemo(() => {
    console.log('useMemo');
    if (count > 5){
      return 'больше 5'
    }
  }, [count]);

  console.log('render, message=', message);
  
  return (
    <>
    <h3>Count: {count}</h3>
    <button onClick={() => setCount(count + 1)}>Click</button>
    {message && <span>{message}</span>}
    </>
  );
}

export default App
