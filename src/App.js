import logo from './logo.svg';
import './App.css';
import Person from "./Person";

import React, { useState } from "react"; // Added React import

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if(todo){
        let newTodos = [...todoList]; // Corrected to store objects in todoList
        newTodos.push({ text: todo, markAsDone: false });
        setTodoList(newTodos);
        setTodo(""); // Clear input after adding todo 
        setError(false);  

    }
    else{
        setError(true);
    }
    
  }

  const handleChange = (e) => { 
    setTodo(e.target.value); // Corrected to setTodo instead of setTodo = e.target.value
  }

  console.log("todoList", todoList);

  const handleMarkAsRead = (index) => {
    let newTodos = [...todoList];
    newTodos[index] = {
        ...newTodos[index],
        markAsDone :true,
    };
    setTodoList(newTodos);

    console.log("Masrk as read");
  }

  return (
    <div className="App">
      <input
        type="text"
        className="form-control mx-5 my-2" style={{ height: 50, width: 200 }} 
        placeholder="Add your Task"
        value={todo} // Added value prop to bind input to todo state
        onChange={handleChange}
      />
      {error ? <p>input is empty </p> : null};
      <button onClick={handleSubmit} type="button" className="btn btn-primary d-flex ">
        Add ToDo
      </button>
      <button type="button" className="btn btn-danger ">
        Delete
      </button>

      

      {todoList.map((item, i) => (
        <div className='d-flex' key={i}>
            <p style={{ textDecoration: item.markAsDone ? "line-through" : "normal",}}  className='w-25'>
                 {item.text};
            </p> 
            
            <button onClick={() => handleMarkAsRead(i)} className='btn btn-primary my-2'>Mark As Read</button>
        
        </div>
      ))}
    </div>
  );
};

export default App;