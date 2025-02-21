import React from "react";
import { Breadcrumb, Title, CourseCard } from "../components";
import { courses } from "../assets/data/data";


console.log("Courses Data:", courses);

const Courses = () => {
  return ( 
    <div className="container mb-5">
      <Breadcrumb current="Courses" />
      <Title title="Our Courses" subtitle="Find the right course for you" />

      <section className="courses my-0">
        <div className="row justify-content-center">
          <div className="col-12">
            {/* Tabs Navigation */}
            <nav>
              <div
                className="nav nav-tabs mb-4 border-0 justify-content-center"
                id="nav-tab"
                role="tablist">
                <button
                  className="nav-link active rounded-3 me-2 px-4 mb-2 mb-md-0"
                  id="development-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#development"
                  type="button"
                  role="tab"
                  aria-controls="development"
                  aria-selected="true">
                  Development
                </button>
                <button
                  className="nav-link rounded-3 me-2 px-4 mb-2 mb-md-0"
                  id="junior-school-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#junior-school"
                  type="button"
                  role="tab"
                  aria-controls="junior-school"
                  aria-selected="false">
                  Junior School
                </button>
                <button
                  className="nav-link rounded-3 me-2 px-4 mb-2 mb-md-0"
                  id="design-marketing-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#design-marketing"
                  type="button"
                  role="tab"
                  aria-controls="design-marketing"
                  aria-selected="false">
                  Design & Marketing
                </button>
              </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">
              {/* Development Courses */}
              <div
                className="tab-pane fade show active" id="development" role="tabpanel" aria-labelledby="development-tab">
                <div className="row justify-content-center g-4">
                  {courses.filter((item) => item.category === "web").length > 0 ? (
                    courses.filter((item) => item.category === "web").map((item) => <CourseCard key={item.id} {...item} />)
                  ) : (
                    <p className="text-center">No courses available in this category.</p>
                  )}
                </div>
              </div>

              {/* Junior School Courses */}
              <div
                className="tab-pane fade"
                id="junior-school"
                role="tabpanel"
                aria-labelledby="junior-school-tab"
              >
                <div className="row justify-content-center">
                  {courses.filter((item) => item.category === "kids").length > 0 ? (
                    courses
                      .filter((item) => item.category === "kids")
                      .map((item) => <CourseCard key={item.id} {...item} />)
                  ) : (
                    <p className="text-center">No courses available in this category.</p>
                  )}
                </div>
              </div>

              {/* Design & Marketing Courses */}
              <div
                className="tab-pane fade"
                id="design-marketing"
                role="tabpanel"
                aria-labelledby="design-marketing-tab"
              >
                <div className="row justify-content-center">
                  {courses.filter((item) => item.category === "d_m").length > 0 ? (
                    courses
                      .filter((item) => item.category === "d_m")
                      .map((item) => <CourseCard key={item.id} {...item} />)
                  ) : (
                    <p className="text-center">No courses available in this category.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
