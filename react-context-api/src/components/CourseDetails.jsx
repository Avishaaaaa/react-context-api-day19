import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function CourseDetails() {
  const { student } = useContext(StudentContext);

  return (
    <div className="card">
      <h2>Course Details</h2>

      <h3>{student.course}</h3>

      <p>{student.batch}</p>
    </div>
  );
}

export default CourseDetails;