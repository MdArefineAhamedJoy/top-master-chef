import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";
import Banner from "../Banner/Banner";

const Home = () => {
  const [chefCard, setChefCard] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefData")
      .then((res) => res.json())
      .then((data) => setChefCard(data));
  }, []);
  console.log(chefCard);
  return (
    <div className="px-5">
        <Banner></Banner>
      <div className="mt-20 grid grid-cols-3 gap-5">
        {chefCard.map((data) => (
          <ChefCard data={data} key={data.id}></ChefCard>
        ))}
      </div>
      );
    </div>
  );
};

export default Home;
