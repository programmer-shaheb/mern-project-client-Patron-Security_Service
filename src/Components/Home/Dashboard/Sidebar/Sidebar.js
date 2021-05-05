import {
  faCartPlus,
  faComments,
  faHome,
  faShoppingBag,
  faSignOutAlt,
  faSlidersH,
  faStore,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../../App";
import Blogs from "../../BlogPost/Blogs";
import "./Sidebar.css";

const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(userContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://nameless-temple-98460.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: isLoggedIn.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
      });
  }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        {!isAdmin ? (
          <>
            <h5 className="text-center text-white">Hello, User</h5>
            <li>
              <Link to="/" className="text-white">
                <FontAwesomeIcon icon={faHome} /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/service" className="text-white">
                <FontAwesomeIcon icon={faShoppingBag} /> <span>Service</span>
              </Link>
            </li>
            <li>
              <Link to="/myService" className="text-white">
                <FontAwesomeIcon icon={faUsers} /> <span>My Services</span>
              </Link>
            </li>

            <li>
              <Link to="/review" className="text-white">
                <FontAwesomeIcon icon={faComments} /> <span>Review Us</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <h5 className="text-center text-white">Hello, Admin</h5>
            <li>
              <Link to="/" className="text-white">
                <FontAwesomeIcon icon={faHome} /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/allOrder" className="text-white">
                <FontAwesomeIcon icon={faStore} /> <span>Order List</span>
              </Link>
            </li>
            <li>
              <Link to="/addService" className="text-white">
                <FontAwesomeIcon icon={faCartPlus} /> <span>Add Service</span>
              </Link>
            </li>
            <li>
              <Link to="/addAdmin" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/setting" className="text-white">
                <FontAwesomeIcon icon={faSlidersH} />{" "}
                <span>Manage Service</span>
              </Link>
            </li>
          </>
        )}
      </ul>
      <div>
        <Link to="/login" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
