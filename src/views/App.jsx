import React from 'react';
import { useState } from 'react';
import './App.scss';
import Myconponents from '../components/Myconponents';

function App() {
  let [name, setName] = useState('Huy');
  let [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: '1', name: 'todos1' },
    { id: '2', name: 'todos2' },
    { id: '3', name: 'todos3' },
  ]);
  const handleEventClick = (event) => {
    if (!address) {
      alert('Vui lòng nhập!');
      return;
    }
    let newTodo = { id: 'abc', name: address };
    setTodos([...todos, newTodo]);
    setAddress(''); // Clear the input after adding a new todo
  };

  const handleOnchangeInput = (event) => {
    address = event.target.value
    console.log(address);
    setAddress(address);
    
  };
  // re-render the component
  return (
    <>
      <p>My name is: {name}</p>
      <p>Who love me: {address}</p>
      <div className='container'>
        {todos.map((todo) => {
          return (
            <li className='todo_child' key={todo.id}>
              {todo.name}
            </li>
          );
        })}
      </div>
      <input type='text' value={address} onChange={(event) => handleOnchangeInput(event)} />
      <div className='div_Button'>
        <button className='Button' onClick={(event) => handleEventClick(event)}>
          Click me
        </button>
      </div>
      <Myconponents></Myconponents>
    </>
  );
}

export default App;
