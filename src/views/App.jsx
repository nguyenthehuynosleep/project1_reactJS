import { useState } from 'react'
import './App.scss'

function App() {
  // const [count, setCount] = useState(0)
  const text = {name: 'Huy', age: 19};
  return (
    <>  
      {console.log(text)}
      {JSON.stringify(text)}
    </>
  )
}

export default App
