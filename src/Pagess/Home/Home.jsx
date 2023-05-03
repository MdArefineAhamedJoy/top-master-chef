import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import MovingText from "../ExtraSection/ChefAward";
import TopFood from "../ExtraSection/TopFood";

const Home = () => {
  const chefData = useLoaderData();

  return (
    <div className="px-5">
      <Banner></Banner>
      <div className="mt-20">
        <h1 className="font-bold text-2xl text-center pb-10 ">World Top Master Chef</h1>
        <div className=" grid grid-cols-3 gap-5">
          {chefData.map((data) => (
            <ChefCard data={data} key={data.id}></ChefCard>
          ))}
        </div>
      </div>
      <MovingText></MovingText>
      <TopFood></TopFood>
    </div>
  );
};

export default Home;
