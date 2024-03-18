import React, { useContext } from "react";
import Blogitem from "./Blogitem";
import { UseContext } from "../Context/Createcontext";
import { memo } from "react";


const Searchbox = () => {
  const { search,setsearch } = useContext(UseContext);

  
  
const handleChange=(e)=>{
  setsearch({[e.target.name]:e.target.value})
}
  return (
    <>

      <div className="flex flex-col p-3 gap-[20px] border mt-0 w-full   items-center  ">
        <h1 className="text-xl font-bold text-gray-500">Search Blog's</h1>
        <div className=" flex justify-center items-center gap-2 w-full">
          <input
            type="search"
            placeholder="Search here"
            className="p-2 w-3/4  ring-gray-500 rounded border"
            onChange={handleChange}
            name="title"
            value={search.title}
          />

          <i className="bi bi-search bg-gray-400 py-1 px-2 rounded text-xl cursor-pointer hover:text-white hover:bg-red-500"></i>
        </div>
      </div>

    </>
  );
};

export default memo(Searchbox);
