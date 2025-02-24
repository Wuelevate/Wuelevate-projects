import React from 'react'
import Card from './card'

const Tours = ({tours , removeTourHandler }) => {
  return (
    <div className='tour-box'>
        {
          tours.map((tour) => { 
            return <Card key={tour.id} {...tour} removeTourHandler={removeTourHandler} ></Card>
          })
        }
    </div>
  )
}

export default Tours