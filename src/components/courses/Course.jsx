import React from "react";

const Course = ({ img, title, desc }) => (
  <li className="flex gap-10">
    <img className="flex-none w-14 h-14" src={img} alt="course" />
    <div className="grow">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </li>
);

export default Course;
