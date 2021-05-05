import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ServicesDetail from "./ServicesDetail";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://nameless-temple-98460.herokuapp.com/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section style={{ marginTop: "120px" }} className="services-container ">
      <div className="text-center mt-5">
        <h5 style={{ color: "#EF904D" }}>WHAT WE OFFER</h5>
        <h1 style={{ color: "#000" }}>OUR SERVICES</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {services.map((service) => (
            <ServicesDetail
              service={service}
              key={service.name}
            ></ServicesDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
