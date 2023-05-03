import React from "react";
import Lottie from "lottie-react";
import { useRouteError } from "react-router-dom";
import img from "../../../public/animation.json";
const Error = () => {
  const { error, status } = useRouteError();
  return (
    <div className="bg-red-400 md:flex items-center h-screen">
      <div className="md:w-6/12 md:p-10">
        {
            status && <p className="md:text-8xl text-4xl py-6 font-extrabold">Error : {status} </p>
        }
        <p className="font-semibold text-lg">{error?.message}</p>
      </div>
      <div className="">
        <Lottie animationData={img}></Lottie>
      </div>
    </div>
  );
};

export default Error;
