import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img from "../../assets/banner-5.webp";
const TopFood = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="md:flex  items-center">
      <div className="grid md:w-8/12 md:grid-cols-2 gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="w-full p-4 h-52"
                src={item.image_url}
                alt="food"
              />
            </figure>
            <div className=" flex justify-between p-4 ">
              <h2>Fd Name : {item.name}</h2>
              <p>Fd Origin : {item.origin}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-red-500 border  mt-3  md:w-4/12 ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {items.map((data) => (
            <SwiperSlide key={data.id}>
              <img className="w-full h-96" src={data.image_url} alt="" />
              <p>
                {data.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopFood;
