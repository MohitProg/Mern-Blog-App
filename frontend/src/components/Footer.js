import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <footer className='flex mt-3 flex-col  sm:flex-row  gap-2 p-[10px]  w-full bottom-0   bg-gray-300'>

            <div className='w-1/3 p-3  flex flex-col '>
                <h1 className='font-bold ' >Address-</h1>
                <span>D-456b street india 0000</span>
                <span>mohitjj99@gmail.com</span>

            </div>

          
            
            <div className='w-full p-3  flex  item-start sm:items-center gap-[20px] flex-col sm:flex-row '>
                <h1 className='font-bold'>Social Link-</h1>
                <Link><i className="bi bi-instagram"></i>-Instagram</Link>
                <Link><i className="bi bi-facebook"></i>-Facebook</Link>
                <Link><i className="bi bi-twitter"></i>-twitter</Link>
                <Link><i className="bi bi-youtube"></i>-youtube</Link>
            </div>



        </footer>

    )
}

export default Footer