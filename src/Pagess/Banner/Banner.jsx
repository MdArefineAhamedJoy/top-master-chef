import React from 'react';
import bg from '../../assets/top-view-table-full-delicious-food-composition_23-2149141353.avif'
const Banner = () => {
    return (
        <div style={{  
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            height:"100vh",
            width:'100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <h1>hello</h1>
        </div>
    );
};

export default Banner;