import React from "react";
import { Link } from "react-router-dom";
import { students } from "../data/students";
import { courses } from "../data/courses";
import StudentCard from "../components/StudentCard";
import CourseCard from "../components/CourseCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow">WELCOME TO THE</p>
        <h1>Student Information Portal</h1>
        <p className="hero-text">
          A simple portal for viewing student information and available academic programs.
        </p>
        <div className="hero-actions">
          <Link className="button button-light" to="/students">View Students</Link>
          <Link className="button button-outline" to="/courses">Explore Courses</Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">PORTAL OVERVIEW</p>
            <h2>At a Glance</h2>
          </div>
        </div>
        <div className="stats-grid">
          <div className="stat-card"><span className="stat-number">{students.length}</span><span>Sample Students</span></div>
          <div className="stat-card"><span className="stat-number">{courses.length}</span><span>Academic Programs</span></div>
          <div className="stat-card"><span className="stat-number">4</span><span>Portal Pages</span></div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><p className="eyebrow">RECENTLY ADDED</p><h2>Featured Students</h2></div>
          <Link className="text-link" to="/students">View all students →</Link>
        </div>
        <div className="card-grid">
          {students.slice(0, 2).map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div><p className="eyebrow">ACADEMICS</p><h2>Featured Courses</h2></div>
          <Link className="text-link" to="/courses">View all courses →</Link>
        </div>
        <div className="card-grid">
          {courses.slice(0, 2).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </>
  );
}