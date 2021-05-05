import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import FooterCol from "../FooterCol/FooterCol";
import "./Footer.css";

const Footer = () => {
  const noNamed = [
    { name: "Emergency Service", link: "/emergency" },
    { name: "Public Services", link: "/public" },
    { name: "Private Services", link: "/private" },
    { name: "Fees", link: "/fees" },
    { name: "Extra Services", link: "/extra" },
  ];
  const ourAddress = [
    { name: "Mirpur - 101010 Dhaka", link: "//google.com/map" },
    { name: "Dhanmondi", link: "//google.com/map" },
  ];
  const moreInfo = [
    { name: "Emergency Service", link: "/emergency" },
    { name: "Public Services", link: "/public" },
    { name: "Private Services", link: "/private" },
    { name: "Fees", link: "/fees" },
  ];
  const services = [
    { name: "Emergency Service", link: "/emergency" },
    { name: "Public Services", link: "/public" },
    { name: "Private Services", link: "/private" },
    { name: "Fees", link: "/fees" },
    { name: "Extra Services", link: "/extra" },
  ];

  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol key={1} menuItems={noNamed} />
          <FooterCol key={2} menuTitle="Services" menuItems={services} />
          <FooterCol key={3} menuTitle="More Info" menuItems={moreInfo} />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
          </FooterCol>
        </div>
        <div className="copyRight text-center text-white ">
          <p style={{ marginBottom: 0 }}>
            Copyright {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
