// Navigate.jsx
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// Components
import { Loader } from "../../widgets";
import { About, Contact, Home, ServicePage } from "../../pages";
// Constants
import { services } from "../../constants";

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
      {services.map((service, index) => (
        <Route
          key={index}
          path={service.link}
          element={<ServicePage data={service} />}
        />
      ))}
    </Routes>
  );
};

export default Navigate;
