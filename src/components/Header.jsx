import React from "react";

const Header = () => (
  <header className="flex items-center justify-between px-5 py-10 bg-gray-300 rounded-t-lg">
    <a href="" className="uppercase font-bold">
      Logo
    </a>
    <ul className="flex gap-4">
      <li>
        <a href="#" className="font-medium">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="font-medium">
          About
        </a>
      </li>
      <li>
        <a href="#" className="font-medium">
          Teachers
        </a>
      </li>
      <li>
        <a href="#" className="font-medium">
          Courses
        </a>
      </li>
    </ul>
  </header>
);

export default Header;
