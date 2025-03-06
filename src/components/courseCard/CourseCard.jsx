import React from "react";
import { Link } from "react-router-dom";
import "./courseCard.css";

const CourseCard = ({ id, course_img, title, price }) => {
  return (
    <div className="col-md-4 col-lg-3 col-sm-12">
      <article className="course">
        <Link to={`/course/${id}`}>
          <div className="course-header">
            <img src={course_img} alt={title} className="rounded" />
            <span className="theme-bg px-2 py-1 fw-bold rounded">{price}</span>
          </div>
          <h6 className="coutitlerse- my-3 fs-6">{title}</h6>
        </Link>
      </article>
    </div>
  );
};

export default CourseCard;