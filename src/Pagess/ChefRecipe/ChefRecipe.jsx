import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ChefRecipe = ({ recipeItem }) => {
  
  const [disableUser , setDisableUser] = useState(false)
  const { imageURL, name, rating, cookingMethod, ingredients } = recipeItem;
  const toastMessage = () =>{
    setDisableUser(true)
    return toast("Add Our Favorite List");
  } 
  return (
    <div className="mb-10 ">
      <div className="card  card-side bg-base-100 shadow-xl">
        <figure className="w-1/1">
          <img className="w-full h-full" src={imageURL} alt="Movie" />
        </figure>
        <div className="card-body md:w-2/12 w-full">
          <p className="font-bold text-lg">Item Name : {name}</p>
          <p><span className="font-bold">CookingMethod :</span> {cookingMethod}</p>
          <div className=" ">
           <span className="font-bold ">Ingredients :</span>
            {ingredients.map((ingredient , index) => (
              <span key={index}> {ingredient} , </span>
            ))}
          </div>
          <p><span className="font-bold">Rating : </span>{rating}</p>
          <div className="card-actions justify-end">
            <button disabled={disableUser} onClick={()=>toastMessage(true)} className="bg-gradient-to-r from-cyan-500 to-blue-500 btn border-0">Favorite</button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipe;
