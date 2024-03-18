import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import ToastAlert from '../components/ToastAlert'
import { UseContext } from '../Context/Createcontext'
import Spinner from '../components/Spinner'
import GoogleAuth from '../Auth/GoogleAuth'
const Login = () => {

  const {  setuserdata, settoken, setloader, loader } = useContext(UseContext);


  const Navigate = useNavigate()
  const [login, setlogin] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();


    try {
      
      setloader(true)
      const res = await axios.post("http://localhost:80/api/signin", {
        email: login.email,
        password: login.password
      })
  
  
     
      if (res.data.success === true) {
        localStorage.setItem("token", res.data.authtoken);
  
        settoken(res.data.authtoken);
        setuserdata(res.data.userexit);
  
        ToastAlert(res.data.msg, "success")
        Navigate("/")
        setloader(false)
      } else {
        setloader(false)
        ToastAlert(res.data.msg, "error")
      }
  
      setlogin({ email: "", password: "" });
    } catch (error) {
      
      setloader(true);
      ToastAlert("Check Your Internet","error")
    }
  };




  const [text, settext] = useState("");
  const [type, settype] = useState("password");


  const togglepassword = (e) => {
    e.preventDefault();
    if (type === "password") {
      settype("text");
      settext("-slash")
    } else if (type === "text") {
      settype("password");
      settext("");
    }


   

  }

  return (
    <>




      <div className='h-[80vh] flex justify-center items-center p-2'>
        <form action="" className='flex p-2 gap-3 flex-col item-center justify-center sm:w-1/3 w-full mx-auto bg-gray-300' onSubmit={handleClick}>

          <label htmlFor="" className='text-xl'>Email</label>
          <input type="text" className='rounded p-2 text-gray-600' value={login.email} name='email' onChange={handleChange} />
          <label htmlFor="" className='text-xl'>Password</label>
          <div className='border relative'>

          <input type={type} className='rounded  w-full p-2 text-gray-600' onChange={handleChange} value={login.password} name='password' />
          <i className={`bi bi-eye${text}  absolute right-1 top-2`} onClick={togglepassword}></i>

          </div>
          <button className=' sm:w-1/4  mt-3 lg:text-xl bg-red-600 p-1 rounded font-bold text-white hover:bg-red-400'>Submit</button>
          <GoogleAuth/>
          {loader === false ? "" : <Spinner />}

          <span className='text-blue-500'>don't have account ?<Link to="/signup">signup</Link></span>
        </form>

      </div>



    </>
  )
}

export default Login