import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`https://nameless-temple-98460.herokuapp.com/allOrders`)
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
      });
  }, [orderList]);

  const updateStatus = (id) => {
    const statusValue = { id, status };
    console.log(status);
    console.log(id);

    fetch(`https://nameless-temple-98460.herokuapp.com/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(statusValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-6 col-12">
          <h3>Order List</h3>

          {orderList.map((order, index) => (
            <div className="bg-light rounded p-3 m-4 d-flex justify-content-around align-items-center">
              <h3>{order.email}</h3>
              <label className="form-label" id={index + 1}>
                <h4>{order.serviceName}</h4>
              </label>
              <select
                name="status"
                id="status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="ongoing">On Going</option>
                <option value="complete">Complete</option>
              </select>
              <button
                onClick={() => updateStatus(order._id)}
                className="btn btn-success"
              >
                Change Status
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderList;
