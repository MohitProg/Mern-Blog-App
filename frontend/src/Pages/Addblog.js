import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import ToastAlert from "../components/ToastAlert";
import { toolbarOptions } from "../Utillites/Quilldata";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";


const module = {
  toolbar: toolbarOptions,
};

const Addblog = () => {
    const [loader,setloader]=useState(false)
  const [content, setcontent] = useState("");
  const [title, settitle] = useState("");
  const [file, setfile] = useState("");
  const [category, setcategory] = useState("");

  const [summery, setsummery] = useState("");
  const Navigate=useNavigate();



  const postnewdata =  async (ev) => {
    ev.preventDefault();

    const newpost = new FormData();

    newpost.set("title", title);
    newpost.set("category", category);
    newpost.set("file", file[0]);
    newpost.set("content", content);
    newpost.set("summary", summery);

    setloader(true)
    const res = await axios.post(
      "http://localhost:80/create/createblog",
      newpost
    );

    if (res.data.success === true) {
        ToastAlert(res.data.msg, "success");
        Navigate("/")

    }else if(res.data.success===false){
      ToastAlert(res.data.msg,"info")
    }
    setloader(false)

    setcontent("");
    settitle("");
    setfile("");
    setsummery("");
  }

  // post the data;

  return (
    <>
      <form
        className="w-full sm:w-2/3 mx-auto border mt-3 p-1 flex flex-col gap-[10px]"
        onSubmit={postnewdata}
      >
        <h1 className="text-center text-xl text-gray-500 font-bold">
          Add Your Blog
        </h1>
        <div className="flex flex-col gap-[10px] p-2">
          <label htmlFor="">Add Category</label>
          <input
            type="text"
            className="p-2 ring-1 ring-black"
            onChange={(ev) => setcategory(ev.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-[10px] p-2">
          <label htmlFor="">Add Title</label>
        
          <input
            type="text"
            min="1" max="5"
            className="p-2 ring-1 ring-black in-range:bg-green-500 appearance-none outline-none"
            onChange={(ev) => settitle(ev.target.value)}
            
            required
          />

        </div>
        <div className="flex flex-col gap-[10px] p-2">
          <label htmlFor="">Image or file</label>
          <input
            type="file"
            className="p-2 ring-1 ring-black"
            required
            onChange={(ev) => setfile(ev.target.files)}
          />
        </div>

        <div className="flex flex-col gap-[10px] p-2">
          <label htmlFor="">summery</label>
          <textarea rows="10"
            type="text"
            className="p-2 ring-1 ring-black"
            onChange={(ev) => setsummery(ev.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Discription</label>
          <ReactQuill
            theme="snow"
            modules={module}
            value={content}
            onChange={(value) => {
              setcontent(value);
            }}
          />
        </div>

        <div>
          <button className="bg-red-600 p-1 rounded font-bold text-white hover:bg-red-400">
          {loader===true?<Spinner/>:"Submit"}
     
          </button>
        </div>
        <div>

            
        </div>
        {/* 
               {content} */}
      </form>
    </>
  );
};

export default Addblog;
