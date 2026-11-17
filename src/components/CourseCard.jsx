import React from "react";

export default function CourseCard({ course }) {
  return (
    <article className="info-card course-card">
      <div className="course-icon" aria-hidden="true">{course.code.slice(0, 2)}</div>
      <div className="card-content">
        <p className="eyebrow">{course.code}</p>
        <h3>{course.name}</h3>
        <p>{course.description}</p>
        <span className="units">{course.units} Units</span>
      </div>
    </article>
  );
}