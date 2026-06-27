import { useState, useEffect, useRef } from 'react'

function AutoSaveForm() {
  const [data, setData] = useState(() => {
    return JSON.parse(sessionStorage.getItem('form')) || { name: '', email: '', phone: '' }
  })

  useEffect(() => {
    sessionStorage.setItem('form', JSON.stringify(data))
  }, [data])

  const change = (e) => setData({ ...data, [e.target.name]: e.target.value })
  const reset = () => {
    setData({ name: '', email: '', phone: '' })
    sessionStorage.removeItem('form')
  }

  return (
    <div>
      <h2>Форма</h2>
      <input name="name" value={data.name} onChange={change} placeholder="Имя" /><br/>
      <input name="email" value={data.email} onChange={change} placeholder="Email" /><br/>
      <input name="phone" value={data.phone} onChange={change} placeholder="Телефон" /><br/>
      <button onClick={reset}>Сброс</button>
    </div>
  )
}

function TodoList() {
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || [])
  const [text, setText] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const add = () => {
    if (!text) return
    setTodos([...todos, { id: Date.now(), text, done: false }])
    setText('')
  }

  return (
    <div>
      <h2>Задачи</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={add}>Добавить</button>
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <input type="checkbox" checked={t.done} onChange={() => {
              setTodos(todos.map(x => x.id === t.id ? { ...x, done: !x.done } : x))
            }} />
            <span style={{ textDecoration: t.done ? 'line-through' : 'none' }}>{t.text}</span>
            <button onClick={() => setTodos(todos.filter(x => x.id !== t.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Timer() {
  const [sec, setSec] = useState(() => parseInt(sessionStorage.getItem('timer')) || 0)
  const [active, setActive] = useState(false)
  const ref = useRef()

  useEffect(() => {
    sessionStorage.setItem('timer', sec)
    if (active) {
      ref.current = setInterval(() => setSec(s => s + 1), 1000)
    } else {
      clearInterval(ref.current)
    }
    return () => clearInterval(ref.current)
  }, [active, sec])

  return (
    <div>
      <h2>Таймер: {sec}</h2>
      <button onClick={() => setActive(true)} disabled={active}>Старт</button>
      <button onClick={() => setActive(false)} disabled={!active}>Пауза</button>
      <button onClick={() => { setActive(false); setSec(0); sessionStorage.removeItem('timer') }}>Сброс</button>
    </div>
  )
}

export default function App() {
  return (
    <>
      <AutoSaveForm />
      <TodoList />
      <Timer />
    </>
  )
}