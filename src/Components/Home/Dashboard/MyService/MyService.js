import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../../App";
import Sidebar from "../Sidebar/Sidebar";

const MyService = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(userContext);

  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    fetch(
      `https://nameless-temple-98460.herokuapp.com/orderInfo?email=${isLoggedIn?.email}`
    )
      .then((res) => res.json())
      .then((data) => setOrderDetails(data));
  }, [orderDetails]);

  return (
    <section>
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-6 col-12">
          <h2 className="text-success">My Services </h2>
          <div class="d-flex justify-content-center">
            {orderDetails.length === 0 && <h3>No Order</h3>}
          </div>
          <h3>Your Email : {isLoggedIn.email} </h3>
          {orderDetails.map((order) => (
            <div className=" bg-light rounded p-3 m-4 d-flex justify-content-around align-items-center">
              <h4> {order.serviceName} </h4>
              <h4> $ {order.charge} </h4>
              <h4> {order.status} </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyService;
