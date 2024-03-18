import React from "react";
import Searchbox from "../components/Searchbox";

import Addsection from "../components/Addsection";
import { Suspense } from "react";
const Getdata = React.lazy(() => import("../components/Getdata"));



const Home = () => {




    return (
        <>
            {/*  section 1 */}
            <div className="grid mt-2 grid-cols-1 lg:grid-cols-4  gap-3 min-h-[600px] p-3 ">
                <div className="  flex flex-col sm:flex-row   lg:flex-col  w-[90vw] gap-3 sm:w-full   lg:col-span-1 ">
                    <div className="min-h-[100px] w-full sm:w-1/2 lg:w-full  ">
                        <Searchbox />
                    </div>

                    <div className="min-h-[100px] w-full sm:w-1/2 lg:w-full ">
                        <Addsection />
                    </div>
                </div>
                {/*  blog data */}
                <Suspense >
                    <Getdata />

                </Suspense>



            </div>

        </>
    );
};

export default Home;
