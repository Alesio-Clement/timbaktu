import React from "react";

import bannerImg from "../../assets/img/banner-img1.png";


import { useGlobalContext } from "../../context/context";

import "./banner.css";
const Banner = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <section className="banner d-flex align-items-center ">
      <div className="bubble-animation">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            {/* <h2 className="theme-clr mb-3 fs-5">
              Empowering the Next Generation of Tech Experts!
            </h2> */}
            <h1 className="mb-3 text-capitalize fs-3 fw-bold">
            Transform your future with tech Skills
            </h1>
            <p className="mb-4 text-muted">
            we provide hands-on, expert-led training in web development, mobile app development, and coding for kids. Whether you're a beginner or looking to advance your skills, our courses are designed to equip you with the knowledge and practical experience needed to thrive in the tech industry.
            </p>
            <button type="button" className="theme-btn">
              Join Now
            </button>
          </div>
          <div className="col-md-6 order-first order-md-last mb-5 mb-md-0">
            <div className="circular-img">
              <img src={bannerImg} alt="banner img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
