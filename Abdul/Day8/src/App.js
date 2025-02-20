// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import './main.css';

function App() {

  const [value , setValue] = useState(0);

  function incrementHandler() {
      setValue(value + 1);
  }

  function decrementHandler() {
    setValue(value - 1);
  }

  function resettHandler() {
    setValue(0);
}

  return (
    <div className="h-[100vh] w-[100vw]  items-flexcenter justify-center flex-col bg-[#d9f4e3] gap-10">

      <p className='font-medium text-2xl text-[#0398d4]'>Increment & Decrement</p>

      <div className='flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151] bg-white box-border'>

        <button onClick={incrementHandler} className='border-r-2 text-center w-20 text-5xl border-[#bfbfbf]'>+</button>

        <div className='font-bold text-5xl gap-12'>
          {value}
        </div>

        <button onClick={decrementHandler} className='border-l-2 text-center w-20 text-5xl border-[#bfbfbf]'>-</button>

      </div>

      <button onClick={resettHandler} className='bg-[#0398d4] text-white px-4 py-2 text-lg'>Reset</button>
    </div>
  );
}

export default App;
