import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import MovingText from "../ExtraSection/ChefAward";
import TopFood from "../ExtraSection/PopularItem";
import PopularItem from "../ExtraSection/PopularItem";

const Home = () => {
  const chefData = useLoaderData();

  return (
    <div className="  opacity-80 md:px-5">
      <Banner></Banner>
      <div className="mt-20">
        <h1 className="font-bold text-2xl text-center pb-10 ">World Top Master Chef</h1>
        <div className=" grid md:grid-cols-3 grid-cols-1 gap-5">
          {chefData.map((data) => (
            <ChefCard data={data} key={data.id}></ChefCard>
          ))}
        </div>
      </div>
      <MovingText></MovingText>
      <PopularItem></PopularItem>
    </div>
  );
};

export default Home;
