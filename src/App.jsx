import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  });

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light"
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme)
  }

  return (
    <div className={theme}>
    <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default App
