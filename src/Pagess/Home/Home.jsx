import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const chefData = useLoaderData()

  const handelDetails = (id) =>{
    const findValue = chefData.find(data => data.id === id )
  }
  
  return (
    <div className="px-5">
        <Banner></Banner>
      <div className="mt-20 grid grid-cols-3 gap-5">
        {chefData.map((data) => (
          <ChefCard data={data} handelDetails={handelDetails} key={data.id}></ChefCard>
        ))}
      </div>
      
    </div>
  );
};

export default Home;
