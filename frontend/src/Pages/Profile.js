import React, { useEffect, useState } from "react";
import { UseContext } from "../Context/Createcontext";
import { useContext } from "react";
import Blogitem from "../components/Blogitem";
import axios from "axios";
import Spinner from "../components/Spinner";

const Profile = () => {
  const {
    userdata,
    getuserblog,
    loader,
    userblogdata,
    deleteblog,
    updateblog,
  } = useContext(UseContext);

  useEffect(() => {
    userblogdata();
  }, []);

  return (
    <>
      <div className="min-h-[600px]  grid w-4/5  mx-auto mt-2">
        <div>
          {userdata && userdata ? (
            <div className="row-span-1  flex items-center gap-1  p-2">
              <img
                src={userdata.photo}
                className="w-[80px] h-[80px] rounded-[50%]"
              />

              <div>
                <h1 className="font-bold text-sm sm:text-lg ">
                  {userdata.name}
                </h1>
                <h1 className="text-gray-700 text-sm sm:text-sm font-semibold">
                  {userdata.email}
                </h1>
              </div>
            </div>
          ) : (
            ""
          )}

          
          {/* {getuserblog === null || getuserblog.length === 0 ? (
            <h1 className="text-gray-500 text-center">Please add some blog</h1>
          ) : (
            ""
          )} */}

          {loader==false? <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
            {getuserblog &&
              getuserblog.map((value, index) => {
                return (
                  <>
                    <div className="flex flex-col">
                      <Blogitem
                        value={value}
                        deleteblog={deleteblog}
                        updateblog={updateblog}
                        key={index}
                      />
                    </div>
                  </>
                );
              })}
          </div>:<Spinner/>}
         
        </div>
      </div>
    </>
  );
};

export default Profile;
