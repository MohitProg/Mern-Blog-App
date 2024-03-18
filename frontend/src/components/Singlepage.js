import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blogitem from "./Blogitem";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UseContext } from "../Context/Createcontext";
import { useContext } from "react";
import Spinner from "./Spinner";
import Addsection from "./Addsection";
import Getdata from "./Getdata";

const Singlepage = () => {
  const { setloader, loader, setsearch } = useContext(UseContext);

  const { id } = useParams();


  const [postdata, setpostdata] = useState();


  const getpost = async () => {
    setloader(true);
    const res = await axios.get(`http://localhost:80/create/getblogs/${id}`);

    setpostdata(res.data);


    setloader(false);
  };

  useEffect(() => {
    getpost();
  }, [id]);




  return (
    <>
      {!postdata || loader === true ? (
        <>
          <div className="min-h-[600px] grid grid-cols-1">
            <Spinner />
          </div>
        </>
      ) : (
        <div className="grid mt-2 relative  grid-cols-1 lg:grid-cols-4  gap-3 min-h-[100px] p-3">
          <div className="lg:h-[400px]   grid  grid-cols-1 sm:grid-cols-2  gap-2 lg:grid-cols-1 p-1 ">
            <div className="row-span-1  flex items-center gap-1  p-2">
              <img
                src={postdata.user.photo}
                className="w-[80px] h-[80px] rounded-[50%]"
                alt="please wait"
              />

              <div>
                <h1 className="font-bold text-sm sm:text-lg ">
                  {postdata.user.name}
                </h1>
                <h1 className="text-gray-700 text-sm sm:text-sm font-semibold">
                  {postdata.user.email}
                </h1>
              </div>
            </div>

            <div className="min-h-[100px] ">
              <Addsection />
            </div>
          </div>

          <div className="lg:col-span-3  ">
            <div className=" min-h-[400px]  p-1 gap-3 grid lg:grid-cols-1 ">
              <div className="">
                <img
                  className="w-full  sm:h-[50vh] object-contain  rounded  "
                  src={`http://localhost/${postdata.file}`}
                  alt=""
                />
              </div>

              <div className="sm:p-3">
                <h1 className="sm:text-2xl text-xl mt-1 text-start font-bold">
                  {postdata.title}
                </h1>
                <div
                  className="content text-sm text-gray-500 font-sembold sm:text-lg  mt-4"
                  dangerouslySetInnerHTML={{ __html: postdata.content }}
                />
              </div>

            </div>
          </div>
        </div>
      )}


      <div>
        <h1 className="text--center  text-lg text-black">Related blogs</h1>
     
      </div>



    </>
  );
};

export default Singlepage;
