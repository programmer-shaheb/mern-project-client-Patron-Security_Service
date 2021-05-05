import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Testimonial from "./Testimonial";
import "./Testimonial.css";

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    fetch(`https://nameless-temple-98460.herokuapp.com/reviews`)
      .then((res) => res.json())
      .then((data) => setTestimonialData(data));
  }, []);

  return (
    <section
      className="testimonials"
      style={{
        marginTop: "120px",
        backgroundColor: "#F5F5F5",
        padding: "50px",
      }}
    >
      <div className="container">
        <div className="section-header text-center">
          <h5 style={{ color: "#EF904D" }}>WHAT CLIENT SAYS</h5>
          <h1 style={{ color: "#000" }} className=" text-uppercase">
            Testimonial
          </h1>
        </div>
        <div className="card-deck mt-5">
          {testimonialData.map((testimonial) => (
            <Testimonial testimonial={testimonial} key={testimonial._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
