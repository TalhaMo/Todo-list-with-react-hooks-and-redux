import React from 'react';
import './App.css';
import InputToDo from './components/InputToDo'
import Todolist from './components/Todolist'
function App() {


  return (
    <div className="App">
      <h1>To Do List</h1>
      <InputToDo/>
      <Todolist />
    </div>
  );
}

export default App;
