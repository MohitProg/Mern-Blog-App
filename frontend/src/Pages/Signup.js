import React from "react";
import { Link } from "react-router-dom";
import ToastAlert from "../components/ToastAlert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import GoogleAuth from "../Auth/GoogleAuth";
import { useContext } from "react";
import { UseContext } from "../Context/Createcontext";
import Spinner from "../components/Spinner";
const Signup = () => {
  const Navigate = useNavigate()
  const {setloader, loader} = useContext(UseContext);
  

  const [signup, setsignup] = useState({ name: "", email: "", password: "" });
  const handleChange = (e) => {
    setsignup({ ...signup, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    setloader(true)
    e.preventDefault();
    try {
      
      // calling api data for signup
      const res = await axios.post("http://localhost:80/api/signup", {
        name: signup.name,
        email: signup.email,
        password: signup.password,
      });
  
      console.log(res.data.msg);
  
      if (res.data.success === true) {
        setloader(false)
        ToastAlert(res.data.msg, "success");
        Navigate("/signin");
      } else {
        setloader(true)
        ToastAlert(res.data.msg, "error");
      }
  
      setsignup({ name: "", email: "", password: "" });
    } catch (error) {
      ToastAlert("No Internet","error")
    }
  };



  //  eye feature 

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
      <div className="h-[80vh] flex justify-center items-center p-2">
        <form
          action=""
          className="flex p-2 gap-3 flex-col item-center justify-center w-full sm:w-1/3 mx-auto bg-gray-300"
          onSubmit={handleClick}
        >
          <label htmlFor="" className="text-xl">
            Name
          </label>
          <input
            type="text"
            className="rounded p-2 text-gray-600"
            name="name"
            onChange={handleChange}
            required
            value={signup.name}
          />
          <label htmlFor="" className="text-xl">
            Email
          </label>
          <input
            type="text"
            className="rounded p-2 text-gray-600"
            onChange={handleChange}
            value={signup.email}
            name="email"
            required
          />

          <label htmlFor="" className="text-xl">
            Password
          </label>

          <div className='border relative'>

            <input type={type} className='rounded  w-full p-2 text-gray-600' onChange={handleChange} value={signup.password} name='password' required />
            <i className={`bi bi-eye${text}  absolute right-1 top-2`} onClick={togglepassword}></i>

          </div>
          <button className=" w-1/4 lg:text-xl bg-red-600 p-1 rounded font-bold text-white hover:bg-red-400">
            Submit
          </button>
          <GoogleAuth />
          {loader === false ? "" : <Spinner />}
          <span className="text-blue-500">
            have an  account ?<Link to="/signin">signin</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default Signup;
