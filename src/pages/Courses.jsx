import React from "react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function Courses() {
  return (
    <section className="section page-section">
      <p className="eyebrow">ACADEMIC PROGRAMS</p>
      <h1>Courses</h1>
      <div className="card-grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}