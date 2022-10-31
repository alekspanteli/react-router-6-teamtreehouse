import { Route, Routes } from "react-router-dom";

// App components

import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <div className="container mx-auto my-10 px-2 h-screen flex flex-col">
      <Header />
      <main className="px-5 py-10 bg-white rounded-b-lg grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
