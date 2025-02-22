import React, { useState } from "react";
import $ from "jquery";
import { Breadcrumb } from "../components";

const SignUp = () => {
  const [message, setMessage] = useState(""); // Success message state

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    // Get form data
    const formData = {
      fullName: $("#fullName").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      location: $("#location").val(),
      courses: $("input[name='courses[]']:checked")
        .map(function () {
          return this.value;
        })
        .get(),
    };

    // AJAX request
    $.ajax({
      url: "https://formsubmit.co/ajax/clement.alesio1@gmail.com",
      method: "POST",
      data: formData,
      dataType: "json",
      success: function (response) {
        setMessage("Thank you! Your registration was successful.We will reach out to you via phone and email to get started in a moment.");
        $("#signupForm")[0].reset(); // Reset form fields
      },
      error: function (error) {
        setMessage("Oops! Something went wrong. Please try again.");
      },
    });
  };

  return (
    <>
      <Breadcrumb current="SignUp" />
      <section className="signup">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <div className="box">
                <h2 className="text-center fs-4 mb-4 fw-bold">Register Here</h2>

                {message && <p className="alert alert-success text-center">{message}</p>}

                <form id="signupForm" onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="form-floating mb-3">
                    <input type="text" id="fullName" name="fullName" className="form-control" placeholder="Full Name" required />
                    <label htmlFor="fullName">Full Name</label>
                  </div>

                  {/* Email */}
                  <div className="form-floating mb-3">
                    <input type="email" id="email" name="email" className="form-control" placeholder="Email" required />
                    <label htmlFor="email">Email</label>
                  </div>

                  {/* Phone Number */}
                  <div className="form-floating mb-3">
                    <input type="tel" id="phone" name="phone" className="form-control" placeholder="Phone Number" pattern="[0-9]+" title="Enter a valid phone number" required />
                    <label htmlFor="phone">Phone Number</label>
                  </div>

                  {/* Physical Location */}
                  <div className="form-floating mb-3">
                    <input type="text" id="location" name="location" className="form-control" placeholder="Physical Location" required />
                    <label htmlFor="location">Physical Location</label>
                  </div>

                  {/* Course Selection */}
                  <fieldset className="form-group mb-3">
                    <legend className="form-label mb-2">Select Courses</legend>

                    <div className="form-check">
                      <input type="checkbox" id="webProgramming" name="courses[]" value="Introduction to Web Programming" className="form-check-input" />
                      <label htmlFor="webProgramming" className="form-check-label">Introduction to Web Programming</label>
                    </div>

                    <div className="form-check">
                      <input type="checkbox" id="codingForKids" name="courses[]" value="Coding for Kids" className="form-check-input" />
                      <label htmlFor="codingForKids" className="form-check-label">Coding for Kids</label>
                    </div>

                    <div className="form-check">
                      <input type="checkbox" id="mobileDevelopment" name="courses[]" value="Mobile App Development" className="form-check-input" />
                      <label htmlFor="mobileDevelopment" className="form-check-label">Mobile App Development</label>
                    </div>

                    <div className="form-check">
                      <input type="checkbox" id="wordpress" name="courses[]" value="Web Development With WordPress" className="form-check-input" />
                      <label htmlFor="wordpress" className="form-check-label">Web Development With WordPress</label>
                    </div>

                    <div className="form-check">
                      <input type="checkbox" id="seo" name="courses[]" value="Search Engine Optimization (SEO)" className="form-check-input" />
                      <label htmlFor="seo" className="form-check-label">Search Engine Optimization (SEO)</label>
                    </div>

                    <div className="form-check">
                      <input type="checkbox" id="graphicDesign" name="courses[]" value="Graphic Design" className="form-check-input" />
                      <label htmlFor="graphicDesign" className="form-check-label">Graphic Design</label>
                    </div>
                  </fieldset>

                  {/* Submit Button */}
                  <button type="submit" className="theme-btn w-100 my-4">Enroll</button>

                  {/* Note */}
                  <p className="text-center text-muted">
                    We will reach out to you via phone and email to get started in a moment.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
