import React from "react";
import StudentCard from "../components/StudentCard";
import { students } from "../data/students";

export default function Students() {
  return (
    <section className="section page-section">
      <p className="eyebrow">STUDENT DIRECTORY</p>
      <h1>Students</h1>
      <p className="page-intro">Browse the sample student profiles listed in the portal.</p>
      <div className="card-grid">
        {students.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </section>
  );
}