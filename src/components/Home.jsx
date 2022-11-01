import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-content home">
      <h2 className="text-3xl font-bold mb-6">Front End Course Directory</h2>
      <p>
        This fun directory is a project for the <em>React Router Basics</em>{" "}
        course on Treehouse.
      </p>
      <p>
        Learn front end web development and much more! This simple directory app
        offers a preview of our course library. Choose from many hours of
        content, from HTML to CSS to JavaScript. Learn to code and get the
        skills you need to launch a new career in front end web development.
      </p>
      <p>
        We have thousands of videos created by expert teachers on web design and
        front end development. Our library is continually refreshed with the
        latest on web technology so you will never fall behind.
      </p>

      <h3 className="mb-5">Featured Teachers</h3>
      {/* <Link to="teachers/HTML/Tommy-Wingo" className="inline-block mb-5">
        Tommy Wingo
      </Link> */}

      <h6 className="text-xl text-sky-600 mb-5">Featured teachers</h6>
      <form className="flex gap-1 items-center">
        <input
          className="block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"
          placeholder="Name"
        />
        <input
          className="block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm"
          placeholder="Name"
        />
        <button className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm">
          Go !
        </button>
      </form>
    </div>
  );
};

export default Home;
