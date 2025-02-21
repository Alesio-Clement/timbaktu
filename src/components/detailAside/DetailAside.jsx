import React from "react";
import "./detailAside.css";

const DetailAside = ({ image, details }) => {
  if (!details) return <div>No details available</div>;

  return (
    <aside className="course-details box p-3">
      {/* Course Image */}
      {image && (
        <div className="aside-header">
          <img src={image} alt="Course" className="img-fluid rounded-3 mb-3" />
        </div>
      )}

      {/* Course Details */}
      <h4>Course Details</h4>
      <p>
        <strong>Price:</strong> {details.price_new}
      </p>
      <ul>
        {details.features.map((feature, index) => (
          <li key={index} className="d-flex align-items-center mb-2">
            <i className={`${feature.icon} theme-clr me-2`}></i>
            <span>{feature.title}</span>
          </li>
        ))}
      </ul>

      {/* Enroll Button */}
      <div className="aside-btn mt-3">
        <button type="button" className="theme-btn w-100 fw-bold">
          Enroll Now
        </button>
      </div>
    </aside>
  );
};

export default DetailAside;
