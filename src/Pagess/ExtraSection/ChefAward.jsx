import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import LazyLoad from "react-lazyload";
const MovingText = () => {
  const [award, setAward] = useState([]);
  useEffect(() => {
    fetch("https://top-master-chef-world-server-mdarefineahamedjoy.vercel.app/award")
      .then((res) => res.json())
      .then((data) => setAward(data));
  }, []);
  return (
    <div className="my-24 ">
      <h2 className="text-center font-bold text-xl md:text-3xl ">Top Chef Award In The World  </h2>
      <Marquee >
        <div className="flex gap-10 shadow-2xl py-5">
          {award.map((data) => (
            <div className="w-32 rounded-lg " key={data.awardId}>
              <LazyLoad>
              <img
                className="h-20 p-6 pb-0 rounded-xl mx-auto"
                src={data.imageUrl}
              ></img>
              </LazyLoad>
              <p className="font-bold text-center ">{data.awardName}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MovingText;
