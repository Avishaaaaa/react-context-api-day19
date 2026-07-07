import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentForm() {
  const { student, setStudent } = useContext(StudentContext);

  const [form, setForm] = useState(student);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const updateStudent = (e) => {
    e.preventDefault();
    setStudent(form);
  };

  return (
    <form className="card" onSubmit={updateStudent}>
      <h2>Update Student</h2>

      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={form.course}
        onChange={handleChange}
      />

      <input
        type="text"
        name="batch"
        placeholder="Batch"
        value={form.batch}
        onChange={handleChange}
      />

      <button>Update Student</button>
    </form>
  );
}

export default StudentForm;