// Navigate.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import { About, Contact, Home } from "../../pages";

const Navigate = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Navigate;
