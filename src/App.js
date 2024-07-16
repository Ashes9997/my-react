import logo from './logo.svg';
import './App.css';
import Person from "./Person";

import React, { useState } from "react"; // Added React import

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

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

  const handleDelete = (index) => {
    let newTodos = [...todoList];
    if(newTodos[index].markAsDone){
      newTodos.splice(index, 1);
      setTodoList(newTodos);
    }

    else{
      
      <p>this to do is not completed </p>

    }

  };

  const handleEdit = (index) => {
    let newTodos = [...todoList];
    console.log("newTodos[index].text" , newTodos[index].text);
    setTodo(newTodos[index].text);
    setEdit(true);
    setEditIndex(index);

    
    
  };
 const saveEdit = () => {
  console.log("saveEdit", todo);
  let newTodos = [...todoList];
  newTodos[editIndex] = {
    ...newTodos[editIndex],
    text: todo,
  }

  setTodoList(newTodos);
  setEdit(false);
  setTodo("");


 };
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
      <button onClick={ isEdit ? saveEdit : handleSubmit} type="button" className="btn btn-primary d-flex ">
        {isEdit ? "Edit Todo" : "Add ToDo"};
      </button>
      

      

      {todoList.map((item, i) => (
        <div className='d-flex' key={i}>
            <p style={{ textDecoration: item.markAsDone ? "line-through" : "normal",}}  className='w-25'>
                 {`${i+1} ) ${item.text}`};
            </p> 
            
            <button onClick={() => handleMarkAsRead(i)} className='btn btn-primary my-2'>Mark As Read</button>
            <button onClick={() => handleDelete(i)} className='btn btn-primary my-2'>Delete</button>
            <button onClick={() => handleEdit(i)} className='btn btn-primary my-2'>Edit</button>
        
        </div>
      ))}
    </div>
  );
};

export default App;