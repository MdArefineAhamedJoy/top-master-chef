import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const ChefRecipe = ({ recipeItem }) => {
  const { imageURL, name, rating, cookingMethod, ingredients } = recipeItem;

  return (
    <div className="mb-10 ">
      <div className="card  card-side bg-base-100 shadow-xl">
        <figure className="w-1/1">
          <img className="w-full h-full" src={imageURL} alt="Movie" />
        </figure>
        <div className="card-body w-2/12">
          <p className="font-bold text-lg">Item Name : {name}</p>
          <p><span className="font-bold">CookingMethod :</span> {cookingMethod}</p>
          <div className=" ">
           <span className="font-bold ">Ingredients :</span>
            {ingredients.map((ingredient) => (
              <span > {ingredient} , </span>
            ))}
          </div>
          <p><span className="font-bold">Rating : </span>{rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipe;
