import React from 'react';
import img from "../2.png"
import "../App.css"
const ExampleCarouselImage = ({ text }) => {
  return (
    <div>
     <img className='img' src={img} alt="" />
      <p>{text}</p>
    </div>
  );
};

export default ExampleCarouselImage;
