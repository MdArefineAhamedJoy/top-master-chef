import React from "react";

const ChefCard = (props) => {

  const {id,chef_picture,chef_name,likes,num_recipes,years_of_experience} = props.data
 

  return (
    <div className="">
      <div className="card w-96 bg-red-100 shadow-xl ">
        <figure>
          <img
            src={chef_picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Chef Name : {chef_name}</h2>
          <div className="flex justify-between my-3 font-bold">
          <small>Recipes :{num_recipes}</small>
          <small>Experience : {years_of_experience}</small>
          </div>
          <div className="card-actions justify-center">
            <button  className="btn btn-primary  ">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;