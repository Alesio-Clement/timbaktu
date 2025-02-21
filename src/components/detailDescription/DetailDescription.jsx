import React from "react";

const DetailDescription = ({ description }) => {
  if (!description) return <div>No description available</div>;

  return (
    <div className="course-description box">
        {description.course_desc.split(".").map((sentence, index) =>
          sentence.trim() ? <p key={index}>{sentence}.</p> : null
        )}
      <h5>{description.course_info.question}</h5>
      <ul>
        {description.course_info.answer.map((ans, index) => (
          <li key={index}>
            <i className="fas fa-check-circle"></i> {ans}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailDescription;
