import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img from "../../assets/banner-5.webp";
import LazyLoad from "react-lazyload";
const PopularItem = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://top-master-chef-world-server-mdarefineahamedjoy.vercel.app/items"
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="pb-20">
      <h2 className="text-center font-bold text-xl md:text-3xl mb-3">
        World Popular Food Items
      </h2>
      <p className="text-center mb-10">
        It's worth mentioning that many other countries have unique and
        <br />
        delicious cuisine, so this list is not exhaustive.
      </p>
      <div className="md:flex  ">
        <div className="grid md:w-8/12 grid-cols-1 md:grid-cols-2 gap-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="card card-compact md:w-96 bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  className="w-full p-4 h-52"
                  src={item.image_url}
                  alt="food"
                />
              </figure>
              <h2 className="text-center font-bold p-4 pt-0 ">
                Fd Name : {item.name}
              </h2>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500   mt-3  md:w-4/12 ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {items.map((data) => (
              <SwiperSlide key={data.id}>
                <LazyLoad>
                  <img
                    className="w-full h-screen"
                    src={data.image_url}
                    alt=""
                  />
                </LazyLoad>
                <div className="text-white">
                  <p className="mt-3 font-bold text-lg text-center">
                    {data.name}
                  </p>
                  <p className="pb-10 px-3">{data.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PopularItem;
