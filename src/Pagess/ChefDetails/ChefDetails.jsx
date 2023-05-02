import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const {
    chefName,
    chefPicture,
    likes,
    numRecipes,
    recipes,
    yearsExperience,
    id,
    bio,
  } = details;
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="w-3/1">
          <img
            src={chefPicture}
            alt="Album"
          />
        </figure>
        <div className="card-body w-1/3">
          <h2 className="card-title">Chef Name : {chefName}</h2>
          <small className="font-bold">Number Of Recipes: {   numRecipes}</small>
          <small className="font-bold">People Likes: {likes}</small>
          <small className="font-bold">Experience : {yearsExperience}</small>
          <p>{ bio}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
