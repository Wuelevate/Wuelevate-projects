import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";


const Card = ({ data, reference}) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[40px] text-white px-5 py-10 overflow-hidden">
            <FaFileAlt />
            <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
            <div className="footer absolute w-full bottom-0 left-0 ">
                <div className='flex items-center justify-between px-8 py-3 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <MdOutlineClose /> : <LuDownload size=".8em" color='#fff' />}
                    </span>
                </div>

                {
                    data.tag.isOpen && (
                        <div className={`${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} tag w-full py-4 flex items-center justify-center`}>
                            <h3 className='text-sm'>{data.tag.tagTitle}</h3>
                        </div>
                    )
                }
            </div>
        </motion.div>

    )
}

export default Card
