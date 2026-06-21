import { useState } from "react";
import './App.css';
import Button from "./Button";
import Person from "./Person";

const person = {
  name: "Murad", secondName: "Hansaryev"
};

const students = [
  {
    name: "Murad",
    secondName: "",
  },
  {
    name: "Alex",
    secondName: "",
  },
  {
    name: "Nurali",
    secondName: "",
  },
];


function App() {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  console.log('render count', count)

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={onClick}>Click</button>
    </>
  );

  // return (
  //   <>
  //   <h3>Hello world</h3>
  //   <br />
  //   <Button>Hello Click</Button>
  //   <Button />

  //   <Person name={person.name} secondName={person.secondName}/>

  //   <Person {...person}/>

  //   <h3>Students</h3>
    
  //   {students.map(student => <Person {...student}/>)}
  //   </>
  // );
};

export default App;
