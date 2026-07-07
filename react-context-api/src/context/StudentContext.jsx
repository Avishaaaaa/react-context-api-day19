import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [student, setStudent] = useState({
    name: "Avisha Aswal",
    course: "B.Tech CSE",
    batch: "2024-2028",
  });

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <StudentContext.Provider
      value={{
        student,
        setStudent,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}