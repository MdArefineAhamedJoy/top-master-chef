import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";

const Home = () => {
  const [chefCard, setChefCard] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefData")
      .then((res) => res.json())
      .then((data) => setChefCard(data));
  }, []);
  console.log(chefCard);
  return (
    <div>
      <div className=" grid grid-cols-3 gap-5">
        {chefCard.map((data) => (
          <ChefCard data={data} key={data.id}></ChefCard>
        ))}
      </div>
      );
    </div>
  );
};

export default Home;
