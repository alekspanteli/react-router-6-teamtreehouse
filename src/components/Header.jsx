import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 py-10 bg-gray-300 rounded-t-lg">
      <Link to="/" className="uppercase font-bold">
        Logo
      </Link>

      <ul className="nav flex gap-4">
        <li>
          <NavLink
            className={({ isActive }) => isActive && "text-teal-500"}
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => isActive && "text-teal-500"}
            to="about"
          >
            About
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="teachers"
            className="font-medium"
          >
            Teachers
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="courses"
            className="font-medium"
          >
            Courses
          </NavLink>
        </li> */}
      </ul>
    </header>
  );
};

export default Header;
