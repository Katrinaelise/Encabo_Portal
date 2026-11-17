import React from "react";

export default function StudentCard({ student }) {
  return (
    <article className="info-card">
      <div className="avatar" aria-hidden="true">{student.name.charAt(0)}</div>
      <div className="card-content">
        <h3>{student.name}</h3>
        <p><strong>Student No.:</strong> {student.studentNumber}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Year:</strong> {student.year}</p>
      </div>
    </article>
  );
}