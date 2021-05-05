import React from "react";
import { Link } from "react-router-dom";
import "./ServiceDetail.css";

const ServicesDetail = ({ service }) => {
  return (
    <div className="col-md-4 text-center service">
      <img style={{ height: "50px" }} src={service.imgURL} alt="" />
      <h5 className="mt-3 mb-3">{service.serviceName}</h5>
      <p className="text-secondary">{service.description}</p>
      <h4>$ {service.charge}</h4>
      <Link to={`/service/${service._id}`}>
        <button className="btn brand-btn">BUY NOW</button>
      </Link>
    </div>
  );
};

export default ServicesDetail;
