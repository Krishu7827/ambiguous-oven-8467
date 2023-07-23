import React from "react";

function Testimonial() {
  return (
     <div id="testimonial">
        <div className="testimonial-header">
            <h3>testimonials</h3>
        </div>
        <hr />
        <div id="testimonials">
        <div id="carouselExampleIndicators" className="carousel slide" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" id="item1" >
    <h3>"Fantastic fitness courses, user-friendly interface, engaging instructors, excellent customer service. Highly recommend for all fitness enthusiasts!"</h3>
          <img src= "https://img-c.udemycdn.com/user/200_H/31334738_a13c_3.jpg" alt="dog-profile" class="testimonial-image"/>
          <em>Angela Yu, Los Angeles</em>
    </div>
    <div className="carousel-item" id="item2" >
    <h3>"This gym fitness website is a game-changer! Diverse courses, expert instructors, and motivating community. Worth every penny!"</h3>
          <img src= "https://img-c.udemycdn.com/user/200_H/4466306_6fd8_3.jpg" alt="dog-profile" className="testimonial-image"/>
          <em>Jack Warth, Australia</em>
    </div>
    <div className="carousel-item" id="item3" >
    <h3>"Thrilled with my progress! This website's courses are exceptional, and the support is outstanding. Fitness goals achieved!"</h3>
          <img src= "https://img-c.udemycdn.com/user/200_H/226043_5d4a_6.jpg" alt="dog-profile" className="testimonial-image"/>
          <em>Tony Mark, New York</em>
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