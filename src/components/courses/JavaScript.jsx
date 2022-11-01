import React from "react";
import Course from "./Course";
import { JSCourses } from "../../data/courses";

const JavaScript = () => {
  let courses = JSCourses.map((course) => {
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

export default JavaScript;
