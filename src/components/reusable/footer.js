import React from "react";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoMailSharp, IoLogoTwitch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="container mb-5 mt-5">
      <div className="footer-container row d-flex justify-content-center flex-sm-row flex-column">
        <div className="col fw-bold">
          <p>Jalan Suroyo No. 161 Mayangan</p>
          <p>Kota Probolonggo 672x000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="col-sm-2 footer-navigation">
          <ul className="footer-navigation-ul">
            <li>
              <a onClick={() => navigate("/landing")}>Our services</a>
            </li>
            <li>
              <a onClick={() => navigate("/landing")}>Why Us</a>
            </li>
            <li>
              <a onClick={() => navigate("/landing")}>Testimonial</a>
            </li>
            <li>
              <a onClick={() => navigate("/landing")}>FAQ</a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <p className="fw-bold">Connect with us</p>
          <div className="social-media">
            <span className="social-media-icon">
              <IoLogoFacebook />
            </span>
            <span className="social-media-icon">
              <IoLogoInstagram />
            </span>
            <span className="social-media-icon">
              <IoLogoTwitter />
            </span>
            <span className="social-media-icon">
              <IoMailSharp />
            </span>
            <span className="social-media-icon">
              <IoLogoTwitch />
            </span>
          </div>
        </div>
        <div className="col ms-auto">
          <p className="fw-bold">Copyright Binar 2023</p>
          <div className="company-logo"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
