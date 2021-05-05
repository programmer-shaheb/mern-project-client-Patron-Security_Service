import React from "react";
import amazon from "../../../images/amazon_PNG17.png";
import shopify from "../../../images/shopify-logo-png-6880.png";
import slack from "../../../images/Slack_RGB.png";
import alibaba from "../../../images/alibaba.png";
import fiverr from "../../../images/fiverr.png";
import nike from "../../../images/logo2.png";
import TrustedClient from "./TrustedClient";

const TrustedClients = () => {
  const clients = [
    {
      id: 1,
      img: amazon,
    },
    {
      id: 2,
      img: shopify,
    },
    {
      id: 3,
      img: slack,
    },
    {
      id: 4,
      img: nike,
    },
    {
      id: 5,
      img: alibaba,
    },
    {
      id: 6,
      img: fiverr,
    },
  ];

  return (
    <section
      style={{
        marginTop: "120px",
        backgroundColor: "#F5F5F5",
        padding: "50px",
      }}
      className="services-container "
    >
      <div className="text-center mt-5">
        <h5 style={{ color: "#EF904D" }}>OUR TRUSTED</h5>
        <h1 style={{ color: "#000" }}>CLIENTS</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {clients.map((client) => (
            <TrustedClient client={client} key={client.id}></TrustedClient>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
