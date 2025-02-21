import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer box">
      <div className="container">
        <div className="row">
          <div className="footer-contact col-12 py-3 ">
            <div className="row justify-content-between ">
              <div className="col-md-4 d-flex align-self-center justify-content-center">
                <div className="contact-icon pe-3">
                  <i className="fa fa-phone-alt"></i>
                </div>
                <div className="contact-text">
                  <h6>+254 713 27 87 47</h6>
                </div>
              </div>
              <div className="col-md-4 d-flex align-self-center justify-content-center">
                <div className="contact-icon pe-3">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h6>info@timbaktu.co.ke</h6>
                </div>
              </div>
              <div className="col-md-4 d-flex align-self-center justify-content-center">
                    <div className="social-icon me-3">
                      <i className="fab fa-facebook"></i>
                    </div>
                    <div className="social-icon me-3">
                      <i className="fab fa-twitter"></i>
                    </div>
                    <div className="social-icon me-3">
                      <i className="fab fa-linkedin"></i>
                    </div>
                  
                    <div className="social-icon me-3">
                      <i className="fab fa-instagram"></i>
                    </div>
                  </div>
            </div>
          </div>
          <div className="footer-copyright col-12 text-center py-3 ">
            <p>
              &copy;{new Date().getFullYear()} All rights Reserved | Developed <a href="">AlessionTech</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
