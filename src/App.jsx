import { Route, Routes } from "react-router-dom";

// App components

import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";

import HTML from "./components/courses/HTML";
import CSS from "./components/courses/CSS";
import JavaScript from "./components/courses/JavaScript";

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
            <Route path="html" element={<HTML />} />
            <Route path="css" element={<CSS />} />
            <Route path="javascript" element={<JavaScript />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
