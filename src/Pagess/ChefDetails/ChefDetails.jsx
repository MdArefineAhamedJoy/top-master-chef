import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const details = useLoaderData()
 
    return (
        <div>
            {
                   console.log(details)
            
            }
        </div>
    );
};

export default ChefDetails;
