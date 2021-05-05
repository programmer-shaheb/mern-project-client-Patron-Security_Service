import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { userContext } from "../../../../App";
import Sidebar from "../Sidebar/Sidebar";
import ProcessPayment from "./ProcessPayment";

const Service = () => {
  const [serviceDetail, setServiceDetail] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useContext(userContext);
  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://nameless-temple-98460.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setServiceDetail(data[0]));
  }, [id]);

  const handleOrder = (e) => {
    e.preventDefault();

    const status = {
      status: "pending",
    };

    const email = {
      email: isLoggedIn.email,
    };

    const orderInfo = { ...serviceDetail, ...email, ...status };
    delete orderInfo._id;

    fetch(`https://nameless-temple-98460.herokuapp.com/addOrder`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    history.push("/myService");
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-6 col-12">
          <form className="row g-3 p-4">
            <div className="col-md-4 mt-5 ">
              <label for="validationCustom01" className="form-label">
                <h4>Your Name</h4>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                value={isLoggedIn.displayName}
                required
              />
            </div>
            <div className="col-md-4 mt-5">
              <label for="validationCustom02" className="form-label">
                <h4>Email</h4>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                value={isLoggedIn.email}
                required
              />
            </div>

            <div className="col-md-6 mt-5">
              <fieldset disabled>
                <label for="disabledTextInput" className="form-label">
                  <h4>Service Name </h4>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="disabledTextInput"
                  value={serviceDetail.serviceName}
                  required
                />
              </fieldset>
            </div>
            <div className="col-md-8 mt-5">
              <label for="validationCustom03" className="form-label">
                <h4>Payment</h4>
              </label>
              <ProcessPayment></ProcessPayment>
              <p className="mt-3">
                Your Service Charged Will Be $ {serviceDetail.charge}
              </p>
            </div>
            <div className="col-12 mt-5 ">
              <button
                onClick={handleOrder}
                className="btn brand-btn"
                type="submit"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Service;
