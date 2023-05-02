import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefRecipe from "../ChefRecipe/ChefRecipe";

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
    <div className="px-5">
      <div className="card md:card-side bg-base-100 shadow-xl my-20">
        <figure className="w-3/1">
          <img
            src={chefPicture}
            alt="Album"
          />
        </figure>
        <div className="card-body w-1/3">
          <h1 className="text-center font-bold mb-5 pb-2 border-b-2 border-sky-700 text-2xl">Chef Details Information</h1>
          <h2 className="card-title">Chef Name : {chefName}</h2>
          <small className="font-bold">Number Of Recipes: {   numRecipes}</small>
          <small className="font-bold">People Likes: {likes}</small>
          <small className="font-bold">Experience : {yearsExperience}</small>
          <p ><span className="font-bold">Chef Bio </span>: <br /> { bio}</p>
        </div>
      </div>
      {
        recipes.map(recipe => <ChefRecipe recipe={recipe} key={recipe.item}></ChefRecipe>)
      }
    </div>
  );
};

export default ChefDetails;
