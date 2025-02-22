import React, { useState } from "react";
import $ from "jquery";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";

const Contact = () => {
  const [message, setMessage] = useState(""); // Success message state

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    // Get form data
    const formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      message: $("#message").val(),
    };

    // AJAX request
    $.ajax({
      url: "https://formsubmit.co/ajax/clement.alesio1@gmail.com",
      method: "POST",
      data: formData,
      dataType: "json",
      success: function () {
        setMessage("Thank you! Your message has been sent successfully.");
        $("#contactForm")[0].reset(); // Reset form fields
      },
      error: function () {
        setMessage("Oops! Something went wrong. Please try again.");
      },
    });
  };

  return (
    <>
      <Breadcrumb current="Contact Us" />
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-items">
                <h2 className="mb-4 fw-bold">Get In Touch</h2>
                <div className="contact-item d-flex mb-2">
                  <div className="item-icon me-4 fs-4 theme-bg p-2 rounded-circle">
                    <i className="fas fa-map-marked-alt"></i>
                  </div>
                  <div className="item-text">
                    <h5>Address</h5>
                    <p>1st Floor, Eagle House. <br />Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="contact-item d-flex mb-2">
                  <div className="item-icon me-4 fs-4 theme-bg p-2 rounded-circle">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="item-text">
                    <h5>Phone</h5>
                    <p>+254 713 27 87 47</p>
                  </div>
                </div>
                <div className="contact-item d-flex mb-2">
                  <div className="item-icon me-4 fs-4 theme-bg p-2 rounded-circle">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="item-text">
                    <h5>Email</h5>
                    <p>info@timbaktu.co.ke</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-form box">
                <h2 className="text-center fs-4 fw-bold mb-5">Leave a Message</h2>

                {message && <p className="alert alert-success text-center">{message}</p>}

                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      className="form-control"
                      pattern="[0-9]+"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="theme-btn w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
