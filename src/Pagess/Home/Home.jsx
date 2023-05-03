import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import MovingText from "../ExtraSection/MovingText";

const Home = () => {
  const chefData = useLoaderData()


  
  return (
    <div className="px-5">
        <Banner></Banner>
      <div className="mt-20 grid grid-cols-3 gap-5">
        {chefData.map((data) => (
          <ChefCard data={data}  key={data.id}></ChefCard>
        ))}
      </div>
      <MovingText></MovingText>
    </div>
  );
};

export default Home;
