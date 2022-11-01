import { Route, Routes, Navigate } from "react-router-dom";

// App components

import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";

import { HTMLCourses, CSSCourses, JSCourses } from "./data/courses";
import CourseContainer from "./components/courses/CourseContainer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="container mx-auto my-10 px-2 h-screen flex flex-col">
      <Header />
      <main className="px-5 py-10 bg-white rounded-b-lg grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="courses/" element={<Courses />}>
            <Route index element={<Navigate replace="true" to="html" />} />
            <Route
              path="html"
              element={<CourseContainer data={HTMLCourses} />}
            />
            <Route path="css" element={<CourseContainer data={CSSCourses} />} />
            <Route
              path="javascript"
              element={<CourseContainer data={JSCourses} />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
