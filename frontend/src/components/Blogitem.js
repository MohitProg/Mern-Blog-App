import React from 'react'
import { Link } from 'react-router-dom';
import { format } from "date-fns";

const Blogitem = ({ value, deleteblog }) => {
 







  return (


    <>
  



      {<div className=' min-h-[100px] w-full bg-gray-200 p-2 flex flex-col gap-2 rounded-lg shadow'>

    
          <Link to={`/singlepage/${value._id}`}>

            <img src={`http://localhost/${value.file}`} className='h-full w-full object-cover' alt="" />

          </Link>


          <div className='flex flex-col gap-2'>

      

        <Link to={`/singlepage/${value._id}`}>

          <h1 className=' sm:text-sm lg:text-xl text-start font-bold '>{value.title.slice(0, 40)}...</h1>

        </Link>

        <p className='text-gray-600 text-sm lg:text-sm text-start'>{value.summary.slice(0, 80)}..</p>

        <div className='flex   justify-start flex-col  sm:flex-row sm:justify-between sm:items-center'>


          <p className='text-sm font-semibold text-gray-800'>{value.user.name}</p>

          <p className='text-sm text-gray-600'>{format(new Date(value.createdAt), 'MMM d,yyyy, HH:mm')}</p>

        </div>
        <div className='flex justify-between text-sm font-bold items-center'>
          {value.user.email ? <Link to={`/update/${value._id}`}> <span className='text-green-400 cursor-pointer'><i class="bi bi-trash"></i>Update</span></Link> : ""}
          {value.user.email ? <span onClick={() => deleteblog(value._id)} className='text-red-400 cursor-pointer'><i class="bi bi-pencil-square"></i> Delete</span> : ""}

        </div>

        </div>
      </div>}


 

    </>

  )
}

export default Blogitem