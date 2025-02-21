import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full bg-gray-400 min-h-screen flex justify-center">
        <Form />
      </div>
    </>
  )
}

export default App
