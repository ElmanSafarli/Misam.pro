import React from "react";
import styled from "styled-components";
import { Footer, Navbar } from "../widgets";

const About = () => {
  return (
    <StyledWrapper>
      <Navbar />

      <section>
        <div className="about_us"></div>
      </section>

      <Footer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div``;

export default About;
