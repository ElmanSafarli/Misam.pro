// Navigate.jsx
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "../../widgets";

// Components
import { About, Contact, Home } from "../../pages";

const Navigate = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    loadData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Navigate;
