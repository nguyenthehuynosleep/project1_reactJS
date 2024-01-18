import React from 'react';
import { useState } from 'react';
import './App.scss'
import Myconponents from '../components/Myconponents'
function App() {

  let [name, setName] = useState('Huy')
  let [adress, setAdress] = useState('Hanoi')
  const handleEventClick = () => {
    setName(name)
    setAdress(adress)
  }
  const handleOnchangeInput = () => {
    adress = event.target.value
    console.log(adress)
  }
  //re-render the component
  return (
    <>
      {/* {JSON.stringify(text)} */}
      <p>My name is: {name}</p>
      <p>My adress is: {adress}</p>

      <input type="text"  onChange={(event) => handleOnchangeInput(event)}/>
      <div className="div_Button">
        <button className='Button' onClick={(event => handleEventClick(event))}>Click me</button>
      </div>
      <Myconponents></Myconponents>
    </> 
  )
}
export default App
