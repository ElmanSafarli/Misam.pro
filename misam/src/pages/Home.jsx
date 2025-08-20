import React from "react";

// Components
import { Navbar, Header, Footer } from "../widgets/";
import { Pagetitle } from "../modules";

const Home = () => {
  return (
    <>
      <Pagetitle
        title="Misam"
        description="Misam helps implement effective communication strategies in the digital world."
      />
      <Navbar />
      <Header />
      <Footer />
    </>
  );
};

export default Home;
