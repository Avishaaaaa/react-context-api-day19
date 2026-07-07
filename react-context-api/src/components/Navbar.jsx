import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function Navbar() {
  const { student, theme, toggleTheme } = useContext(StudentContext);

  return (
    <nav className={theme}>
      <h2>React Student Portal</h2>

      <p>{student.name}</p>

      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
}

export default Navbar;