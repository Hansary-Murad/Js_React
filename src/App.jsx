import { useState } from 'react'
import './App.css';

// 1
function WelcomeMessage(props) {
  return <h1>Добро пожаловать, {props.username}!</h1>
}

// 2
function ItemList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

// 3
function ToggleButton() {
  const [toggle, setToggle] = useState("Вкл")
  return (
    <button onClick={() => setToggle(!toggle)}>{toggle ? "Вкл" : "Выкл"}</button>
  )
}

// 4
function CounterLimit() {
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState("")

  function plus() {
    if (count >= 10) {
      setMsg("Счётчик не может быть больше 10!")
    } else {
      setCount(count + 1)
      setMsg("")
    }
  }

  function minus() {
    if (count <= 0) {
      setMsg("Счётчик не может быть меньше 0!")
    } else {
      setCount(count - 1)
      setMsg("")
    }
  }

  return (
    <div>
      <h2>Счетчик: {count}</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <p>{msg}</p>
    </div>
  )
}

// 5
function NameForm() {
  const [name, setName] = useState("")
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Ваше имя: {name}</p>
    </div>
  )
}

// 6
function TodoList() {
  const [tasks, setTasks] = useState([])
  const [val, setVal] = useState("")

  function add() {
    setTasks([...tasks, val])
    setVal("")
  }

  return (
    <div>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={add}>Добавить</button>
      <ul>
        {tasks.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  )
}


// 8
function CounterHistory() {
  const [count, setCount] = useState(0)
  const [history, setHistory] = useState([0])

  function change(newVal) {
    setCount(newVal)
    setHistory([...history, newVal])
  }

  return (
    <div>
      <h2>Счетчик: {count}</h2>
      <button onClick={() => change(count + 1)}>+</button>
      <button onClick={() => change(count - 1)}>-</button>
      <p>История: [{history.join(', ')}]</p>
    </div>
  )
}


// Главный компонент
export default function App() {
  const fruits = ["Яблоко", "Банан", "Апельсин"]
  
  return (
    <div>
      <WelcomeMessage username="Мурад" />
      
      <ItemList items={fruits} />
      
      <ToggleButton />
      
      <CounterLimit />
      
      <NameForm />
      
      <TodoList />
      
      <CounterHistory />
    </div>
  )
}