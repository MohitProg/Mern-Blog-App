import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useEffect } from 'react';
import { UseContext } from '../Context/Createcontext';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';


import Spinner from '../components/Spinner';


const Auth = () => {
 
  const Navigate=useNavigate(null)
  const {token,loader}=useContext(UseContext);


    useEffect(() => {

      if(!token||token==null ){
        alert("please Login Acount")
      
          return Navigate("/signin")
  
      }
    
    }, []);


  return (
      <>
      {loader===true?<Spinner/>:<Outlet/>}
      
      </>
   
  )
}

export default Auth;