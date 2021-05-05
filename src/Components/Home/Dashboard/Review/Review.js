import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../../../../App";
import Sidebar from "../Sidebar/Sidebar";

const Review = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(userContext);
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddReview = (e) => {
    e.preventDefault();

    const name = isLoggedIn?.displayName;
    const img = isLoggedIn?.photoURL;
    const email = isLoggedIn?.email;

    const reviewData = {
      companyName,
      description,
      name,
      img,
      email,
    };

    fetch("https://nameless-temple-98460.herokuapp.com/addReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setCompanyName("");
    setDescription("");
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-6 col-12">
          <form className="row g-3 p-4" onSubmit={handleAddReview}>
            <div className="col-md-4 mt-5">
              <h3>Review Us</h3>
              <label for="validationCustom02" className="form-label">
                <h4>Company's Name</h4>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </div>

            <div className="col-md-6 mt-5">
              <label for="validationCustom03" className="form-label">
                <h4>Description</h4>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
              />
            </div>
            <div className="col-12 mt-5 ">
              <button className="btn brand-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Review;
