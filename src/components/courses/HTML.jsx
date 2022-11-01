import React from "react";
import Course from "./Course";
import { HTMLCourses } from "../../data/courses";

const HTML = () => {
  let courses = HTMLCourses.map((course) => {
    return (
      <Course
        title={course.title}
        desc={course.description}
        img={course.img_src}
        key={course.id}
      />
    );
  });
  return (
    <div>
      <ul className="grid gap-5">{courses}</ul>
    </div>
  );
};

export default HTML;
