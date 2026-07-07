import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentProfile() {
  const { student } = useContext(StudentContext);

  return (
    <div className="card">
      <h2>Student Profile</h2>

      <p>Name : {student.name}</p>

      <p>Course : {student.course}</p>

      <p>Batch : {student.batch}</p>
    </div>
  );
}

export default StudentProfile;