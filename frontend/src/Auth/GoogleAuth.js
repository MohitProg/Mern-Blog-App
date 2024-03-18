import React from 'react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"
import { app } from '../firebase';
import axios from 'axios';
import { UseContext } from '../Context/Createcontext';
import { useContext } from 'react';
import ToastAlert from '../components/ToastAlert';
import { useNavigate } from 'react-router-dom';

const GoogleAuth = () => {
    const { setuserdata, settoken,setloader } = useContext(UseContext);
    const Navigate = useNavigate();



    const auth = getAuth(app);
    const handlegoogleAuth = async () => {
        
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });

        try {
            const resultsFromGoogle = await signInWithPopup(auth, provider)
     
            setloader(true)

            const res = await axios.post("http://localhost:80/api/google", { name: resultsFromGoogle._tokenResponse.displayName, email: resultsFromGoogle._tokenResponse.email, photourl: resultsFromGoogle._tokenResponse.photoUrl });

        

            if (res.data.success === true) {

                if (res.data.newUser) {
                    setloader(false)
                    setuserdata(res.data.newUser);
                    ToastAlert(res.data.msg, "success");
                    settoken(res.data.authtoken)
                    Navigate("/")
                }

                if(res.data.checkuser){
                    setloader(false)
                    ToastAlert(res.data.msg, "success");
                    setuserdata(res.data.checkuser);
                    settoken(res.data.authtoken)
                    Navigate("/")
                }

              
            }

            if (res.data.success === false) {
                setloader(true)
                ToastAlert(res.data.msg, "error")
            }



        } catch (error) {
    
            setloader(true)
            ToastAlert("Server Problem","error")
        }
    }
    return (
        <>
            <button type='button' className='p-2 rounded   bg-gray-900 text-white' onClick={handlegoogleAuth}>
                <i className="bi bi-google"></i>
                <span>Use Google Account</span>
            
            </button>

        </>
    )
}

export default GoogleAuth
