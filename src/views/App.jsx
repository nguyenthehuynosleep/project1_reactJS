import React from "react";
import { useState, useEffect } from "react";
import "./App.scss";
import Myconponents from "../components/Myconponents";
import Nav from "../components/nav";
import Todo from "../components/todo";
import Covid from "../components/covid";

function App() {
  const [name, setName] = useState("Huy");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "1", name: "todos1" },
    { id: "2", name: "todos2" },
    { id: "3", name: "todos3" },
  ]);
  useEffect(() => {
    console.log("useEffect run");
  });
  const handleEventClick = (event) => {
    if (!address) {
      alert("Vui lòng nhập!");
      return;
    }
    let newTodo = { id: Math.floor(Math.random() * 1000) + 1, name: address };
    setTodos([...todos, newTodo]);
    setAddress(""); // Clear the input after adding a new todo
  };

  const handleOnchangeInput = (event) => {
    const address1 = event.target.value;
    setAddress(address1);
  };
  const deleteDataTodos = (id) => {
    let curentDataTodos = todos;
    curentDataTodos = curentDataTodos.filter((item) => item.id !== id);
    setTodos(curentDataTodos);
  };
  // re-render the component
  return (
    <>
      <Nav></Nav>
      <p>My name is: {name}</p>
      <p>Who love me: {address}</p>
      <Covid></Covid>
    </>
  );
}

export default App;
