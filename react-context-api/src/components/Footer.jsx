import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Footer() {
  const { student } = useContext(StudentContext);

  return (
    <footer>
      <p>{student.name}</p>
    </footer>
  );
}

export default Footer;