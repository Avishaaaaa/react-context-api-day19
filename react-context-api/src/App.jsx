import Navbar from "./components/Navbar";
import Home from "./components/Home";
import StudentProfile from "./components/StudentProfile";
import CourseDetails from "./components/CourseDetails";
import StudentForm from "./components/StudentForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <StudentProfile />
      <CourseDetails />
      <StudentForm />
      <Footer />
    </>
  );
}

export default App;