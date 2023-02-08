// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import Students from "./components/Students";
import data from "./data";

export default function App() {
  const [studentData, setStudentsData] = useState({
    students: data,
  });

  return (
    <div>
      <Header />
      <div className="container">
        {studentData.students.map((student, index) => (
          <Students key={index} student={student} />
        ))}
      </div>
    </div>
  );
}