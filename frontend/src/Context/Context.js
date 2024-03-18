import React from 'react'

import { UseContext } from './Createcontext';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ToastAlert from '../components/ToastAlert';


const Context = ({ children }) => {
    const [userdata, setuserdata] = useState(null);
    const [token, settoken] = useState(null);


    const [loader, setloader] = useState(false);




    axios.defaults.headers.common["auth-token"] = token;

    // get user blogs 

    const [getblog, setgetblog] = useState([]);

    const [search,setsearch]=useState({title:""});

    

    const getblogs = async () => {
     
      
     try {
           
        setloader(true)

        const res = await axios.get(`http://localhost:80/create/getblogs?category=${search.title}`);
        if (res.data.success === true) {

            setgetblog(res.data.getdata);

        } else {
            setloader(true)
            ToastAlert("internal Server error", "error")
        }
        setloader(false);
     } catch (error) {
        setloader(true)
        ToastAlert("Internal Error","error")
        console.log(error)
        
     }




    };


   
    const [getuserblog, setuserblog] = useState(null);

    const userblogdata = async () => {
        try {
            setloader(true)
            const res = await axios.get("http://localhost:80/create/userblog");
    
            setloader(true)
            if (res.data.success === true) {
    
                setuserblog(res.data.getdata);
    
                
            } else {
                setloader(true)
                ToastAlert("internal Server error", "error")
            }
            setloader(false)
        } catch (error) {
            setloader(true);
            ToastAlert("Server Problem","error")
        }
       
    }


    // getdata();



    // blogs data dont need to access;




    // delete blog;

    const deleteblog = async (id) => {

        setloader(true)

        const res = await axios.delete(`http://localhost:80/create/deleteblog/${id}`);
        if (res.data.success === true) {

            ToastAlert(res.data.msg, "success")

            // setloader(false);
        } else {
            setloader(true)
        }


        const blog = getuserblog.filter((value) => {
            return value._id !== id;
        })

        setuserblog(blog)
        setgetblog({...getblog,blog})

        console.log(getblog)
        setloader(false)



    }

    // console.log(getuserblog[0])


    //  single post data;




   

    // update post ;



    return (
        <UseContext.Provider value={{ userdata, setuserdata, settoken, token, getblogs, setsearch, getblog, loader, setloader, userblogdata, getuserblog, deleteblog,search }}  >
            {children}

        </UseContext.Provider>
    )
}

export default Context