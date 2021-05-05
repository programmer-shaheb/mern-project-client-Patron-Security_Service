import React from "react";

const TrustedClient = (props) => {
  const { img } = props.client;
  return (
    <div className="col-md-4 text-center mt-4 ">
      <img style={{ height: "50px" }} src={img} alt="" />
    </div>
  );
};

export default TrustedClient;
