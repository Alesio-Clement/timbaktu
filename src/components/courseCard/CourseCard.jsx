import React from "react";
import { Link } from "react-router-dom";
import "./courseCard.css";

const CourseCard = ({ id, course_img, title, price }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <article className="course">
        <Link to={`/course/${id}`}>
          <div className="course-header">
            <img src={course_img} alt={title} className="rounded" />
            <span className="theme-bg px-2 py-1 fw-bold rounded">{price}</span>
          </div>
          <h3 className="course-title my-3 fs-6">{title}</h3>
        </Link>
      </article>
    </div>
  );
};

export default CourseCard;