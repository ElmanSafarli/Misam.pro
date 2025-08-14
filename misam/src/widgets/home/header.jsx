import React from "react";
import { Link } from "react-router";
import styled from "styled-components";

import {
  About,
  ConsultExpert,
  Faq,
  Partners,
  Products,
  WhyChooseUs,
} from "../../widgets";

const Header = () => {
  return (
    <StyledWrapper>
      <header>
        <div className="header-content">
          <h1>
            We connect <br /> You with your customers <br />{" "}
            <span>Through their favorite </span>
            <br /> Mobile devices.
          </h1>
          <p>
            We help you stay connected with clients worldwide and support you
            every step of the way.
          </p>
          <div className="links">
            <Link to="">Our Services </Link>
            <Link to="/contact">Talk to an expert</Link>
          </div>
        </div>

        <Partners />
      </header>
      <About />
      <Products />
      <WhyChooseUs />
      <Faq />
      <ConsultExpert />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  header {
    .header-content {
      position: relative;
      background: radial-gradient(circle at center, #e8f5e9 0%, #ffffff 60%);
      background-image: linear-gradient(
          1deg,
          rgba(0, 0, 0, 0.03) 1px,
          transparent 1px
        ),
        linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      z-index: 1;
      overflow: hidden;

      h1 {
        font-weight: 500;
        font-size: 54px;
        color: var(--black);
        max-width: 858px;
        text-align: center;
        margin: 0 auto;
        line-height: 128%;
        margin-bottom: 20px;
        margin-top: 220px;

        @media (max-width: 768px) {
          font-size: 36px;
        }

        @media (max-width: 480px) {
          font-size: 28px;
          width: 90%;
          br {
            display: none;
          }
        }
        span {
          opacity: 0.4;
        }
      }
      p {
        font-weight: 400;
        font-size: 16px;
        max-width: 500px;
        width: 90%;
        margin: 0 auto;
        text-align: center;
        color: var(--grey-font);

        @media (max-width: 480px) {
          font-size: 14px;
        }
      }
      .links {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        gap: 12px;
        position: relative;
        z-index: 2;
        flex-wrap: wrap;

        a {
          padding: 14px 38px;
          border-radius: 12px;
          color: var(--white);
          font-weight: 500;
          font-size: 17px;
          transition: all 0.3s ease-in-out;

          @media (max-width: 480px) {
            font-size: 14px;
          }
        }
        a:nth-child(1) {
          background: var(--accent);
        }

        a:nth-child(2) {
          background: var(--black);
        }

        a:hover {
          opacity: 0.8;
        }
      }
    }

    .header-content::before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at center,
        rgba(0, 255, 0, 0.05),
        transparent 60%
      );
      z-index: 0;
    }
  }
`;

export default Header;
