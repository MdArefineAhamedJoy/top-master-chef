import React from "react";
import bg from "../../assets/top-view-table-full-delicious-food-composition_23-2149141353.avif";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("/images/stock/photo-1507358522600-9f71e620c44e.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">World Top Muster <span className="text-green-700">Chef There</span></h1>
            <p className="mb-5">Watch the world's best chefs compete in intense cooking challenges and see who will become the next Top Master Chef. Get ready for a thrilling culinary adventure!</p>
            <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
