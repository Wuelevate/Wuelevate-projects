import React from 'react'
import Backgroound from './components/Backgroound'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className="relative w-full min-h-screen bg-zinc-800">
      <Backgroound />
      <Foreground />
    </div>
  )
}

export default App
