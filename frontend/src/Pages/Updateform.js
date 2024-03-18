import React, { useEffect } from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from "axios";
import ToastAlert from '../components/ToastAlert';
import { UseContext } from '../Context/Createcontext';
import { useContext } from 'react';
import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';





const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];


const module = {
    toolbar: toolbarOptions
}



// post the data;
const Updateform = () => {

    const Navigate = useNavigate();


    const {  loader, setloader, getuserblog } = useContext(UseContext);

    const [content, setcontent] = useState('');
    const [title, settitle] = useState('');
    const [file, setfile] = useState("");


    const [summery, setsummery] = useState('');



    const { id } = useParams();


    useEffect(() => {
        if (getuserblog) {

            const getblogdata = getuserblog.filter((value) => {
                return value._id === id;

            });

            settitle(getblogdata[0].title)
            setfile(getblogdata[0].file)
            setsummery(getblogdata[0].summary)
            setcontent(getblogdata[0].content)
        }

    }, [])

    // update the post 
    const updatepost = async (ev) => {
        ev.preventDefault();

        try {

            const updatedata = new FormData();

            updatedata.set("title", title);
            updatedata.set("summary", summery);
            updatedata.set("content", content);
            updatedata.set(id, id);
            if (file?.[0]) {
                updatedata.set('file', file?.[0]);
            }

            setloader(true)

            const res = await axios.put(`http://localhost:80/create/updateblog/${id}`, updatedata)

         
            if (res.data.success === true) {
                setloader(false)
                ToastAlert(res.data.msg, "success");
                Navigate("/profile")

            };

            if(res.data.success===false){
                setloader(false)
                ToastAlert(res.data.msg, "error")
            }



        } catch (error) {
            console.log(error)
        }




    }





    return (
        <>

            {loader === false ? "" : <Spinner />}
            <form className='w-full sm:w-2/3 mx-auto border mt-3 p-1 flex flex-col gap-[10px]' onSubmit={updatepost}>
                <h1 className='text-center text-xl text-gray-500 font-bold'>Add Your Blog</h1>
                <div className='flex flex-col gap-[10px] p-2'>
                    <label htmlFor="">Add Tile</label>
                    <input type="text" value={title} onChange={ev => settitle(ev.target.value)} className='p-2 ring-1 ring-black' />



                </div>
                <div className='flex flex-col gap-[10px] p-2'>
                    <label htmlFor="">Image or file</label>
                    <input type="file" onChange={ev => setfile(ev.target.files)} className='p-2 ring-1 ring-black' />
                    {/* <div>
                        <img src={} alt="" />
                    </div> */}



                </div>

                <div className='flex flex-col gap-[10px] p-2'>
                    <label htmlFor="">summery</label>
                    <input type="text" value={summery} onChange={ev => setsummery(ev.target.value)} className='p-2 ring-1 ring-black' />



                </div>

                <div>
                    <label htmlFor="">Discription</label>
                    <ReactQuill theme="snow" value={content} onChange={setcontent} modules={module} />
                </div>


                <div>

                    <button className='bg-red-600 p-1 rounded font-bold text-white hover:bg-red-400'>Submit</button>
                </div>



            </form>



        </>
    )
}

export default Updateform