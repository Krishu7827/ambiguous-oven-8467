import React from "react";

const BuyNowButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="card-btn">
      Buy Now
    </button>
  );
};

export default BuyNowButton;
