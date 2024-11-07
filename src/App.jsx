import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Bloge from './Pages/Bloge'
import BookMarks from './Pages/BookMarks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home></Home>
      <Bloge></Bloge>
      <BookMarks></BookMarks>
    </>
  )
}

export default App
