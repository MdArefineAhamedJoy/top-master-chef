import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefRecipe from "../ChefRecipe/ChefRecipe";

const ChefDetails = () => {
  const details = useLoaderData();
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
        <figure className="w-3/1  p-10">
          <img className="md:w-96 md:h-96" src={chefPicture} alt="Album" />
        </figure>
        <div className="card-body w-1/3">
          <h1 className="text-center font-bold mb-5 pb-2 border-b-2 border-sky-700 text-2xl">
            Chef Details Information
          </h1>
          <h2 className="card-title">Chef Name : {chefName}</h2>
          <small className="font-bold">Number Of Recipes: {numRecipes}</small>
          <small className="font-bold">People Likes: {likes}</small>
          <small className="font-bold">Experience : {yearsExperience}</small>
          <p>
            <span className="font-bold">Chef Bio </span>: <br /> {bio}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3">
      <h1 className="md:text-2xl text-xl pb-5 drop-shadow-2xl uppercase font-bold text-center">Chef Most Popular Items </h1>
        {recipes.map((recipeItem , index) => (
          <ChefRecipe
            key={recipeItem.name}
            recipeItem={recipeItem}
          ></ChefRecipe>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
