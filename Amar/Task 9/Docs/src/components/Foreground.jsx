import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    
    const ref = useRef(null);

    const data = [
        {
            desc: "Hi, this is Amardeep singh",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Dowmload Now",
                tagColor: "green"
            }
        },
        {
            desc: "Hello , Engineers. ",
            filesize: ".8mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Dowmload Now",
                tagColor: "blue"
            }
        },
        {
            desc: "Hello! Have a nice day...",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Upload Now",
                tagColor: "red"
            }
        },
        
    ]
    return (
        <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
            {data.map((item, index) => (
                <Card key={index} data={item} reference={ref} />
            ))}
        </div>
    )
}

export default Foreground
