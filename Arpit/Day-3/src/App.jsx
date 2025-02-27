import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date());

  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); 
  }, []);
  return (
    <>
    <div className="bg-zinc-400 w-full h-screen">
    <h1 className="text-5xl font-medium text-center mr-20 " >Day-3 Frontend-Task</h1>
      <div className="w-120 h-120 bg-zinc-500 border-5 rounded-xl overflow-hidden mt-10 ml-[32%]">
     
     <div className="bg-red   h-1/3 flex justify-center items-center">
       <div className="bg-red-500 border-3 w-full h-full"></div>
       <div className="bg-zinc-500 border-3 w-full h-full"></div>
       <div className="bg-red-500 border-3 w-full h-full"></div>
     </div>
     <div className="bg-red  h-1/3 flex justify-center items-center">
       <div className="bg-zinc-500 border-3 w-full h-full ">
         <button
           onClick={() => setCount((c) => c - 1)}
           className="bg-white p-2 text-xl mt-[40%] ml-[17%] rounded-full border-2 font-semibold cursor-pointer "
         >
           Decrease
         </button>
       </div>
       <div className="bg-purple-500 border-3 w-full h-full">
         <p className="text-black text-lg mt-6 ml-7 font-semibold">
           {time.toLocaleDateString()} - {time.toLocaleTimeString()}
         </p>
         <p className="mt-6 text-xl m-auto font-medium rounded-md border-2 bg-red-400 text-center w-32 ">counter:{count}</p>

       </div>
       <div className="bg-zinc-500 border-3 w-full h-full">
         <button
           onClick={() => setCount((c) => c + 1)}
           className="bg-white p-2 mt-[40%] ml-[17%] rounded-full border-2 font-semibold text-xl cursor-pointer"
         >
           Increase
         </button>
       </div>
     </div>
     <div className="bg-red h-1/3 flex justify-center items-center">
       <div className="bg-red-500 border-3 w-full h-full"></div>
       <div className="bg-zinc-500 border-3 w-full h-full"></div>
       <div className="bg-red-500 border-3 w-full h-full"></div>
     </div>
   </div>
    </div>
    
    </>
  
  );
};

export default App;