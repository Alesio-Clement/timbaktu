import React from "react";
import { Routes, Route } from "react-router-dom";
import { Contact, Courses,About, Home, Thanks, SignUp, Course } from "./pages";

const ConfigRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thanks" element={<Thanks />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/course/:id" element={<Course />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default ConfigRoutes;
