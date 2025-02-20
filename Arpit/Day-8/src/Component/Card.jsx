import React from 'react'

const Card = ({data}) => {
  const { name, image, Artist } = data;
 
  return (
   
    <div className=' w-60 bg-zinc-100 flex gap-4 p-4 rounded-md mt-10'>
    <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
      <img className='w-full h-full object-cover  ' src={image} alt="" />
    </div>
  <div>
    <h3 className=' font-semibold text-xl'>{name}</h3>
    <h6 className='text-sm:'>{Artist}</h6>
   
  </div>

    </div>
  )
}

export default Card
