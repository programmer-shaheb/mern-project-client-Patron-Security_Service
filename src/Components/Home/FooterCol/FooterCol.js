import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

const FooterCol = (props) => {
  return (
    <div className="col-md-3">
      {props.menuTitle ? (
        <>
          <h6 style={{ fontSize: "30px" }} className="text-white">
            {props.menuTitle}
          </h6>
        </>
      ) : (
        <>
          <img
            src={logo}
            className="img-fluid"
            style={{ width: "150px" }}
            alt="brand"
          />
        </>
      )}
      <ul className="list-unstyled mt-4">
        {props.menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link} className="text-white">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      {props.children && props.children}
    </div>
  );
};

export default FooterCol;
