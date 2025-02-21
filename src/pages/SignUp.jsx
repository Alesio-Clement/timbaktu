import React from "react";
import { Breadcrumb } from "../components";

const SignUp = () => {
  return (
    <>
      <Breadcrumb current="SignUp" />
      <section className="signup">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <div className="box">
                <h2 className="text-center fs-4 mb-4 fw-bold">Register Here</h2>
                <form>
                  {/* Full Name */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      id="fullName"
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />
                    <label htmlFor="fullName">Full Name</label>
                  </div>

                  {/* Email */}
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                    <label htmlFor="email">Email</label>
                  </div>

                  {/* Phone Number */}
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      id="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      required
                    />
                    <label htmlFor="phone">Phone Number</label>
                  </div>

                  {/* Physical Location */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      id="location"
                      className="form-control"
                      placeholder="Physical Location"
                      required
                    />
                    <label htmlFor="location">Physical Location</label>
                  </div>

                  {/* Course Selection - Checkboxes */}
                  <fieldset className="form-group mb-3">
                    <legend className="form-label mb-2">Select Courses</legend>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="webProgramming"
                        name="courses"
                        value="web-programming"
                        className="form-check-input"
                      />
                      <label htmlFor="webProgramming" className="form-check-label">Introduction to Web Programming</label>
                    </div>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="codingForKids"
                        name="courses"
                        value="coding-kids"
                        className="form-check-input"
                      />
                      <label htmlFor="codingForKids" className="form-check-label">Coding for Kids</label>
                    </div>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="mobileDevelopment"
                        name="courses"
                        value="mobile-development"
                        className="form-check-input"
                      />
                      <label htmlFor="mobileDevelopment" className="form-check-label">Mobile App Development</label>
                    </div>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="wordpress"
                        name="courses"
                        value="wordpress"
                        className="form-check-input"
                      />
                      <label htmlFor="wordpress" className="form-check-label">Web Development With WordPress</label>
                    </div>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="seo"
                        name="courses"
                        value="seo"
                        className="form-check-input"
                      />
                      <label htmlFor="seo" className="form-check-label">Search Engine Optimization (SEO)</label>
                    </div>

                    <div className="form-check">
                      <input
                        type="checkbox"
                        id="graphicDesign"
                        name="courses"
                        value="graphic-design"
                        className="form-check-input"
                      />
                      <label htmlFor="graphicDesign" className="form-check-label">Graphic Design</label>
                    </div>

                  </fieldset>

                  {/* Enroll Button */}
                  <button type="submit" className="theme-btn w-100 my-4">
                    Enroll
                  </button>

                  {/* Note at the Bottom */}
                  <p className="text-center text-muted">
                    We will reach out to you via phone and E-mail to get started in a moment.
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
