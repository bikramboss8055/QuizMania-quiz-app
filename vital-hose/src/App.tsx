import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import VideoQuizGame from './Components/VideoQuizGame'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="App" >
      <VideoQuizGame/>
    </div>
  )
}
export default App
