import React from 'react'
import Blogitem from '../components/Blogitem'

const Category = () => {
    return (
        <>
            <div  className='flex flex-col sm:flex-row mt-3 p-2 gap-[10px]'>
                <div className=' w-full sm:w-1/6 flex items-center sm:items-start flex-col gap-[10px]  bg-gray-300 p-2 '>
                <h1 className='sm:text-xl text-2xl  font-bold text-gray-700'>Category</h1>
                    <div className=''>
                        <select name="" id="" className='p-3 sm:p-2'>
                            <option  value="">Mobile</option>
                            <option value="">computer</option>
                            <option value="">laptop</option>  <option value="">tablet</option>  <option value="">sony</option>
                        </select>



                    </div>
                </div>

                <div className='sm:w-5/6 w-full  flex flex-col gap-[10px]'>
                    <h1 className='text-2xl  font-bold text-gray-500 text-center'>Your Result</h1>


                    <div className='flex flex-wrap gap-[10px] p-1 justify-center '>
                        {/* <Blogitem/>
                        <Blogitem/>
                        <Blogitem/> */}
                    </div>

                </div>
            </div>









        </>
    )
}

export default Category