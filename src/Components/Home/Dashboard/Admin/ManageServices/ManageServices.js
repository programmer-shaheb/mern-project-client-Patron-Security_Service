import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./ManageServices.css";

const ManageServices = () => {
  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    fetch(`https://nameless-temple-98460.herokuapp.com/services`)
      .then((res) => res.json())
      .then((data) => setServicesList(data));
  }, [servicesList]);

  const handleDeleteService = (id) => {
    fetch(`https://nameless-temple-98460.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 col-sm-6 col-12">
          <div className="manage">
            <h3>Manage Services</h3>
            <ul>
              {servicesList.map((service, index) => (
                <li className="bg-light rounded p-3 m-4 d-flex justify-content-around align-items-center">
                  {index + 1}. {service.serviceName}
                  <FontAwesomeIcon
                    onClick={() => handleDeleteService(`${service._id}`)}
                    className="icon"
                    icon={faTrashAlt}
                    size="lg"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageServices;
