import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ToastAlert from "./ToastAlert";
import { useNavigate } from "react-router-dom";
import { UseContext } from "../Context/Createcontext";
import { useContext } from "react";

const Header = () => {
    const location = useLocation();
    const Navigate = useNavigate();
    // use hooks
    const {token,settoken,userdata}=useContext(UseContext);


   

    let path = location.pathname;
    

    const [navclose, setnavclose] = useState(false);
    // const [logout,setlogout]=useState(false)
    const handleClick = () => {
        setnavclose(!navclose);
    };

    const handlesubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post("http://localhost:80/user/signout");

        if (res.data.success === true) {
            localStorage.removeItem("token");
            settoken(null);
            delete axios.defaults.headers.common["auth-token"];
            ToastAlert(res.data.msg, "success");
            Navigate("/signin");
        } else {
            ToastAlert(res.data.msg, "error");
        }
    };

    // console.log(navclose);
    return (
        <>
            <header>
                <nav className="p-3  border shadow  flex gap-[20px] text-lg items-center  justify-between ">
                    <h1 className="text-3xl font-bold">
                        Web<span className="text-red-500">tech</span>
                    </h1>

                    <ul className=" gap-[30px] text-gray-500 items-center hidden sm:flex">
                        <Link to="/" className={path === "/" ? "text-red-500 font-bold" : ""}>
                            Home
                        </Link>
                        <Link font-bold
                            to="/contact"
                            className={path === "/contact" ? "text-red-500 font-bold" : ""}
                        >
                            Contact
                        </Link>
                        {/* <Link to="service"  className={path=="/service"?"text-red-500":""}>Service</Link> */}
                        {/* <Link
                            to="category"
                            className={path === "/category" ? "text-red-500 font-bold" : ""}
                        >
                            Category
                        </Link> */}
                        <Link
                            to="about"
                            className={path === "/about" ? "text-red-500" : ""}
                        >
                            About
                        </Link>
                        <Link
                            to="/addblog"
                            className={path === "/addblog" ? "text-red-500 font-bold" : ""}
                        >
                            Addblog
                        </Link>
                    </ul>

                    <div className="flex gap-[10px]  ">
                        {token ? (
                            <>
                                <div className="flex gap-[10px] items-center ">

                                    <button
                                        className="bg-red-600 p-1 rounded font-bold text-white hover:bg-red-400"
                                        onClick={handlesubmit}
                                    >
                                        Logout
                                    </button>
                                    <Link to="/profile">
                                        <div className=" ring-1 ring-black  h-9 w-8 rounded-[50%] flex items-center justify-center  overflow-hidden">
                                            <img src={userdata.photo} width="100%" className="h-9 w-8" />
                                        </div>

                                    </Link>




                                </div>

                            </>
                        ) : (
                            <Link to="/signin"> <button
                            className="bg-red-600  rounded px-2 py-1 font-bold text-white hover:bg-red-300"
                  
                        >
                            Signin
                        </button> </Link>
                        )}

                        <i
                            className="bi bi-list sm:hidden bg-gray-500 rounded p-1 text-3xl "
                            onClick={handleClick}
                        ></i>
                    </div>
                </nav>
            </header>

            {/* small menu  */}

            <div
                className={
                    navclose === true
                        ? "fixed w-full  top-0 bottom-0 z-999  bg-gray-200 p-2"
                        : "hidden"
                }
            >
                <i
                    className="bi absolute right-0 bi-x-lg text-3xl mr-2"
                    onClick={handleClick}
                ></i>

                <ul className=" gap-[30px] text-gray-500  flex flex-col p-2 text-2xl">
                    <Link
                        to="/"
                        onClick={handleClick}
                        className={path === "/" ? "text-red-500" : ""}
                    >
                        Home
                    </Link>
                    <Link
                        to="/contact"
                        onClick={handleClick}
                        className={path === "/contact" ? "text-red-500" : ""}
                    >
                        Contact
                    </Link>
                    {/* <Link to="service"  className={path=="/service"?"text-red-500":""}>Service</Link> */}
                    <Link
                        to="category"
                        onClick={handleClick}
                        className={path === "/category" ? "text-red-500" : ""}
                    >
                        Category
                    </Link>
                    <Link
                        to="about"
                        onClick={handleClick}
                        className={path === "/about" ? "text-red-500" : ""}
                    >
                        About
                    </Link>
                    <Link
                        to="/addblog"
                        onClick={handleClick}
                        className={path === "/addblog" ? "text-red-500" : ""}
                    >
                        Addblog
                    </Link>
                </ul>
            </div>
        </>
    );
};

export default Header;
