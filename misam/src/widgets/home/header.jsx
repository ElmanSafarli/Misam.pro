import React from "react";
import { Link } from "react-router";
import { Link as ScrollLink, Element as ScrollElement } from "react-scroll";
import styled from "styled-components";

import {
  About,
  ConsultExpert,
  Faq,
  Partners,
  Products,
  WhyChooseUs,
} from "../../widgets";

import { useLanguage } from "../../modules";

const Header = () => {
  const { language } = useLanguage();

  return (
    <StyledWrapper>
      <header>
        <div className="header-content">
          <h1>
            {language === "en" ? "We connect" : "Sevimli mobil"} <br />
            {language === "en"
              ? "You with your customers"
              : "cihazları vasitəsilə"}{" "}
            <br />
            <span>
              {language === "en"
                ? "Through their favorite"
                : "sizi müştərilərinizlə"}
            </span>
            <br />
            {language === "en" ? "Mobile devices." : "əlaqələndiririk."}
          </h1>

          <p>
            {language === "en"
              ? "We help you stay connected with clients worldwide and support you every step of the way."
              : "Misam, sizən ilə bağlı olmaq üçün müştəriləri və sizə ən son xidmətləri təklif edirik."}
          </p>
          <div className="links">
            <ScrollLink to="products-section" smooth={true} duration={600}>
              {language === "en" ? "Our Services" : "Xidmətlərimiz"}
            </ScrollLink>
            <Link to="/contact">
              {language === "en" ? "Talk to an expert" : "Mütəxəssislə danışın"}
            </Link>
          </div>
        </div>

        <Partners />
      </header>
      <About />
      <ScrollElement name="products-section">
        <Products />
      </ScrollElement>

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
