import React from "react";

function Testimonial() {
  return (
     <div id="testimonial">
        <div className="testimonial-header">
            <h3>Reviews</h3>
        </div>
        <hr />
        <div id="testimonials">
        <div id="carouselExampleIndicators" className="carousel slide" data-interval="2000">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" id="item1">
    <h3>"I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof !"</h3>
          <img src= "https://img-c.udemycdn.com/user/200_H/26801218_cefd_3.jpg" alt="dog-profile" class="testimonial-image"/>
          <em>Pebbles, New York</em>
    </div>
    <div className="carousel-item" id="item2">
    <h3>"I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof !"</h3>
          <img src= "https://img-c.udemycdn.com/user/200_H/26801218_cefd_3.jpg" alt="dog-profile" className="testimonial-image"/>
          <em>Pebbles, New York</em>
    </div>
    <div className="carousel-item" id="item3">
    <h3>"I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof !"</h3>
          <img src= "https://img-c.udemycdn.com/user/200_H/26801218_cefd_3.jpg" alt="dog-profile" className="testimonial-image"/>
          <em>Pebbles, New York</em>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
     </div>
  );
}


export default Testimonial