import React, { useState, useEffect } from "react";
import SortThing from "./Sorting";
import BuyNowButton from "./button";
import SortBox from "./priceSort";

const Card = () => {
  const [Data, setData] = useState([]);
  // const [file, setFile] = useState(Data);

  let [filteredData, setFilteredData] = useState(Data);

  

if(filteredData.length===0){
  filteredData=Data
}

  const fetchData=(order)=>{
    fetch(`https://zany-plum-nematode-tie.cyclic.app/course/price/${order}`)
    .then((res) => res.json())
    .then((data) => setFilteredData(data))
    .catch((err) => console.log(err));
  }



  const handleSortChange = (selectedOption) => {
    if (selectedOption === "lowToHigh") {
     
      fetchData("asc")
     
    } else if (selectedOption === "highToLow") {
      fetchData("desc")
  
    }else{
      setFilteredData(Data)
    }



  };

  const handleFilterChange = (selectedOption) => {
    if (selectedOption === "All") {
      setFilteredData(Data); // If no option is selected, show all data
    } else {
      const filteredItems = Data.filter(
        (item) => item.Instructor === selectedOption
      );
      setFilteredData(filteredItems);
    }
  };

  const categories = Array.from(new Set(Data.map((item) => item.Instructor)));

  useEffect(() => {
    fetch("https://zany-plum-nematode-tie.cyclic.app/course")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const handlePurchase = () => {};

  return (
    <div className="Cardcontainer">
      <div className="Sorting">
        <span className="Filter1 filter">Filter By Instructor:- </span>
        <SortThing options={categories} onFilterChange={handleFilterChange} />
        <span className="Filter2 filter">Sort By Price:- </span>
        <SortBox onSortChange={handleSortChange} />
      </div>
      <div className="Card-Data">
        {filteredData.map((el) => {
          return (
            <div className="CardBox">
              <div className="img-section">
                <img src={el.Image} className="card-img" alt="" />
              </div>
              <div className="Details-section">
                <h1>{el.Title}</h1>
                <h3>{el.Description}</h3>
                <h4>Rating: {el.Rating}</h4>
                <h1>Rs. {el.Price}</h1>
                <h3>Created By {el.Instructor}</h3>
                <BuyNowButton onClick={handlePurchase} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
