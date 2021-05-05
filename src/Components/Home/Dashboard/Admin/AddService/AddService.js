import axios from "axios";
import React from "react";
import { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [charge, setCharge] = useState("");
  const [imgURL, setImgURL] = useState("");

  const handleImageUpload = (e) => {
    const imageData = new FormData();
    imageData.set("key", "798953ef86f0a6888953e45bcd0ec65a");
    imageData.append("image", e.target.files[0]);

    axios.post("https://api.imgbb.com/1/upload", imageData).then((res) => {
      setImgURL(res.data?.data?.display_url);
    });
  };

  const handleAddService = (e) => {
    e.preventDefault();

    const serviceData = {
      serviceName,
      description,
      charge,
      imgURL,
    };

    fetch("https://nameless-temple-98460.herokuapp.com/addService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(serviceData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setImgURL("");
    setDescription("");
    setServiceName("");
    setCharge("");
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-6 col-12">
          <h3>Add Service</h3>
          <form className="row g-3 " onSubmit={handleAddService}>
            <div className="col-md-4 mt-5 ">
              <label for="validationCustom01" className="form-label">
                <h4>Service Name</h4>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-4 mt-5">
              <label for="validationCustom02" className="form-label">
                <h4>Fees</h4>
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                value={charge}
                onChange={(e) => setCharge(e.target.value)}
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
            <div className="col-md-4 mt-5">
              <label for="validationCustom02" className="form-label">
                <h4>Upload Service Image/Icon</h4>
              </label>
              <input
                type="file"
                className="form-control"
                id="validationCustom02"
                onChange={handleImageUpload}
                required
              />
            </div>
            <div className="col-12 mt-5 ">
              {imgURL ? (
                <>
                  <button className="btn brand-btn" type="submit">
                    Add Service
                  </button>
                </>
              ) : (
                <>
                  <button className="btn brand-btn" disabled type="submit">
                    Add Service
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddService;
