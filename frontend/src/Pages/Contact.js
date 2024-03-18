import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='h-[80vh] p-2'>
    <form action="" className='flex p-2 gap-2 flex-col item-center justify-center  w-full sm:w-1/2 mx-auto bg-gray-300'>

        <label htmlFor="">Name</label>
        <input type="text" className='rounded p-1 text-gray-600' />
        <label htmlFor="">Email</label>
        <input type="text"  className='rounded p-1 text-gray-600'/>
        <label htmlFor="">Description</label>
        <textarea name="" className='rounded text-gray-600  p-1' id="" cols="30" rows="10"></textarea>

        
        <button className=' w-1/4 text-xl bg-red-600 p-1 rounded font-bold text-white hover:bg-red-400'>Submit</button>
    </form>

    </div>
    
    
    
    
    
    
    </>
  )
}

export default Contact