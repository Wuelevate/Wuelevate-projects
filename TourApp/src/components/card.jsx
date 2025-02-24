import {React , useState} from 'react'

const Card = ({id,name,info,image,price,removeTourHandler}) => {

    const [readMore , setReadMore] = useState(false);
    const description = readMore ? info : `${info.substring(0,190)}.... `;
                        

    function readMoreHandler(){
        setReadMore(!readMore);
    }


  return (
    <div className='card'>
        <img src={image} className='image' alt='tasveer' />

        <div className='tourDetails'>
            <h4 className='tourPrice'> ₹{price}</h4>
            <h4 className='tourCity'>{name}</h4>
            <article className='discription'> {description} 
                <span className='readMore' onClick={readMoreHandler}>
                    {readMore ? 'Show Less' : 'Read More' }
                </span></article>
        </div>
        
        <button className='btnInterest' onClick={() => removeTourHandler(id)}>Note Interested</button>
    </div>
  )
}

export default Card