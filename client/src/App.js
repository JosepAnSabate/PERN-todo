import React, {fragment} from 'react';
import './App.css';

// components
import InputTodo from './components/InputTodo';
import ListTodos from "./components/ListTodos";


function App() {
  return <fragment>
    <div className="container">
      <InputTodo />
      <ListTodos />
    </div>
  </fragment>;
 }

export default App;
