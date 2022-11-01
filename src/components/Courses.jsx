import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Courses = () => (
  <div className="main-content courses">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold mb-10">Courses</h2>
      <ul className="flex gap-2">
        <li>
          <NavLink
            className={({ isActive }) =>
              `font-bold hover:text-teal-500 ${isActive && "text-teal-500"}`
            }
            to="html"
          >
            HTML
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `font-bold hover:text-teal-500 ${isActive && "text-teal-500"}`
            }
            to="css"
          >
            CSS
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `font-bold hover:text-teal-500 ${isActive && "text-teal-500"}`
            }
            to="javascript"
          >
            JavaScript
          </NavLink>
        </li>
      </ul>
    </div>
    <Outlet />
  </div>
);

export default Courses;
