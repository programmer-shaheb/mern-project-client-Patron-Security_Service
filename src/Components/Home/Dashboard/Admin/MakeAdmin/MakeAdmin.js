import React from "react";
import { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";

const MakeAdmin = () => {
  const [makeAdmin, setMakeAdmin] = useState("");

  const handleAddAdmin = (e) => {
    e.preventDefault();

    const adminData = { makeAdmin };

    fetch("https://nameless-temple-98460.herokuapp.com/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setMakeAdmin("");
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-6 col-12">
          <form className="row g-3 " onSubmit={handleAddAdmin}>
            <div className="col-md-4 mt-5">
              <label for="validationCustom02" className="form-label">
                <h4>Make Admin</h4>
              </label>
              <input
                type="email"
                className="form-control"
                id="validationCustom02"
                value={makeAdmin}
                onChange={(e) => setMakeAdmin(e.target.value)}
                required
              />
            </div>
            <div className="col-12 mt-5 ">
              <button className="btn brand-btn" type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
