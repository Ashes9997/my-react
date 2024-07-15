import logo from './logo.svg';
import './App.css';
import Person from "./Person";

import { Fragment,useState } from "react";


const App = () => {
  const [todoList, setTodoList]  = useState([]);
  const [todo, setTodo] = useState("");
  // let todo = "";

  const HandleSubmit = () => {
    // console.log("HandleSubmit" , todo)
    let newTodos = [...todoList];
    newTodos.push(todo);
    setTodoList(newTodos);
    setTodo ("");
    // {text : newTodos , markAsDone : false}

  }
  const HandleChange = (e) => { 
    // console.log(e.target.value);
    setTodo = e.target.value;

  }
  console.log("todoList" , todoList);
  return (
    <div className="App">
      <input type="text" className="form-control my-2" placeholder="Add your Task" onChange={HandleChange}/>
      <button onClick={HandleSubmit} type="button" className="btn btn-primary">To Do</button>
      <button type="button" className="btn btn-danger">Delete</button>

      {todoList.map( (item, i) => <p key={i}>{ item.text}</p>)}


    </div>
  ); 

   
  
};

export default App;
