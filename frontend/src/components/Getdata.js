import React from "react";



import { useEffect } from "react";

import { UseContext } from "../Context/Createcontext";
import { useContext } from "react";
import { Suspense } from "react";
import Spinner from "../components/Spinner";
const Blogitem=React.lazy(()=>import("../components/Blogitem"));

const Getdata=()=>{
  
   
    const { getblog, loader,getblogs,search } = useContext(UseContext);
 

    useEffect(()=>{
        getblogs();

    },[search.title])
  return(
    <>
     {/* {loader === false ? <> */}
                    <div className="lg:col-span-3  ">
                            {getblog === null || getblog.length === 0 ? <h1 className='text-gray-500 text-center'>No blog Found</h1> : ""}
                   

                        <div className=" min-h-[400px]   gap-3 sm:grid-cols-2 grid lg:grid-cols-3 ">

                            {
                                getblog &&
                                getblog.map((value, index) => {
                                    return (
                                        <>
                                            <Suspense  fallback={<Spinner/>}>
                                                <Blogitem value={value} key={index} />
                                            </Suspense>
                                        </>
                                    );
                                })
                             }
                        </div>
                    </div>

                {/* </> : <>
                    <div className="col-span-3  min-h-[500px] flex items-center justify-center">
                        <Spinner />
                    </div>

                </>} */}

    
    </>
  )
}


export default Getdata