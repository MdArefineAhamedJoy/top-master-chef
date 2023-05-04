import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ChefCard = ({ data, handelDetails }) => {
  const {
    id,
    chef_picture,
    chef_name,
    likes,
    num_recipes,
    years_of_experience,
  } = data;
  
  return (
    <div className="">
      <div className="card md:w-96 shadow-xl ">
        <figure>
          <img src={chef_picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chef Name : {chef_name}</h2>
          <div className="flex justify-between my-3 font-bold">
            <small>Recipes :{num_recipes}</small>
            <small>Experience : {years_of_experience}</small>
          </div>
          <div className="card-actions justify-center">
            <Link
              to={`chefData/${parseInt(id)}`}
              className="btn bg-gradient-to-r from-cyan-500 to-blue-500 border-0 "
            >
              {" "}
              View Recipes
            </Link>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
