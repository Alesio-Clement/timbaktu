import React from "react";
import { useParams } from "react-router-dom";
import { Breadcrumb, DetailAside, DetailDescription } from "../components";
import { courses } from "../assets/data/data";

const Course = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <div className="text-center mt-5">Course not found!</div>;
  }

  return (
    <>
      <Breadcrumb current={course.title} />
      <section className="single-course mb-5">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 order-lg-last">
            <DetailAside image={course.course_img} details={course.details} />
            </div>
            <div className="col-lg-8">
              <h3 className="fs-5">{course.title}</h3>
              <DetailDescription description={course.description} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;