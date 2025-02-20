import React, { useState } from 'react'
import Card from './Component/Card'
import Navbar from './Component/Navbar'

const App = () => {
  const data = [
    { name:"Hangover", image:"https://images.unsplash.com/photo-1485579149621-3123dd979885?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ3xlbnwwfHwwfHx8MA%3D%3D", Artist:"Meet.bro's"},
    { name:"Qismat", image:"https://plus.unsplash.com/premium_photo-1664301228494-42c11c2ac062?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", Artist:"B praak"},
    { name:"Buttabomma", image:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2luZ3xlbnwwfHwwfHx8MA%3D%3D", Artist:"Armaan mallik"},
{ name:"Darkhaast", image:"https://images.unsplash.com/photo-1522863602463-afebb8886ab2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2luZ3xlbnwwfHwwfHx8MA%3D%3D", Artist:"Sunidhi Chauhan"},
  ];
  const[songData,setSongData]=useState(data);

  return (
    <div className='w-full h-screen bg-zinc-300 '>
      <Navbar/>
      <div className='px-20 flex gap-5  flex-wrap'>
        {songData.map(obj=>{
          return <Card data={obj}/>
        })}
      
      </div>
     
    
    </div>
  )
}

export default App
