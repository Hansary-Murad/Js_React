
import './App.css'
import { useState, useEffect, useRef } from 'react';

// Задача 1
function RenderCounter() {
  const renderCount = useRef(0);
  renderCount.current += 1;
  return <p>Рендеров: {renderCount.current}</p>;
}

// Задача 2
function Greeting({ name }) {
  useEffect(() => {
    console.log(`Имя изменено на: ${name}`);
  }, [name]);
  return <h1>Привет, {name}!</h1>;
}

// Задача 3
function StatusChecker() {
  const [isOnline, setIsOnline] = useState(false);
  const isMountedRef = useRef(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isMountedRef.current) setIsOnline(true);
    }, 2000);
    return () => {
      isMountedRef.current = false;
      clearTimeout(timer);
    };
  }, []);

  return <p>Статус: {isOnline ? 'Онлайн' : 'Оффлайн'}</p>;
}

// Задача 4
function MirrorInput() {
  const [text, setText] = useState('');
  const [mirrorText, setMirrorText] = useState('');
  const [isSynced, setIsSynced] = useState(true);

  useEffect(() => {
    if (!isSynced) return;
    const timer = setTimeout(() => setMirrorText(text), 1000);
    return () => clearTimeout(timer);
  }, [text, isSynced]);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Основной" />
      <input 
        value={mirrorText} 
        onChange={(e) => { setMirrorText(e.target.value); setIsSynced(false); }} 
        placeholder="Зеркало" 
      />
      <button onClick={() => setIsSynced(true)}>Синхронизировать</button>
    </div>
  );
}

export default function App() {
  const [name, setName] = useState('Гость');
  const [showStatus, setShowStatus] = useState(true);

  return (
    <div>
      <RenderCounter />
      
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Greeting name={name} />
      
      <button onClick={() => setShowStatus(!showStatus)}>Toggle Status</button>
      {showStatus && <StatusChecker />}
      
      <MirrorInput />
    </div>
  );
}
