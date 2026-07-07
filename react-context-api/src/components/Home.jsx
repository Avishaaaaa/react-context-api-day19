import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Home() {
  const { student } = useContext(StudentContext);

  return (
    <div className="card">
      <h2>Welcome</h2>

      <h3>{student.name}</h3>
    </div>
  );
}

export default Home;