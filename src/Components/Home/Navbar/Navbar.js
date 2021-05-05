import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../../../App";
import logo from "../../../images/logo.png";

const Navbar = () => {
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
    <>
      <div className="container-fluid">
        <div className="row " style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <NavLink className="navbar-brand brand-name" to="/">
                <img style={{ width: "175px" }} src={logo} alt="logo" />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ backgroundColor: "#EF904D" }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link m-2 text-white" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link m-2 text-white" to="/">
                      About
                    </NavLink>
                  </li>
                  {isAdmin ? (
                    <>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link m-2 text-white"
                          to="/allOrder"
                        >
                          Admin
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link m-2 text-white"
                          to="/myService"
                        >
                          My Service
                        </NavLink>
                      </li>
                    </>
                  )}
                  {!isLoggedIn ? (
                    <>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link m-2 text-white"
                          to="/login"
                        >
                          Login
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="nav-item">
                        <NavLink
                          className="nav-link m-2 text-white"
                          to="/login"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
