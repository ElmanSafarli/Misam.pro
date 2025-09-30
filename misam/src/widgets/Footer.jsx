import React from "react";
import styled from "styled-components";
import { Logo } from "../shared";
import { Link } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { useLanguage } from "../modules";

const Footer = () => {
  const { language } = useLanguage();
  return (
    <StyledFooter>
      <div className="footer_content max_width">
        <div className="footer_top">
          <h2>
            Let's <span>Connect</span> there
          </h2>
          <Link to="/contact">
            <span>{language === "en" ? "Contact us" : "Əlaqə"}</span>
            <span className="arrow">
              <svg
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6.1C0.502944 6.1 0.1 6.50294 0.1 7C0.1 7.49706 0.502944 7.9 1 7.9V6.1ZM16.6364 7.6364C16.9879 7.28492 16.9879 6.71508 16.6364 6.3636L10.9088 0.636039C10.5574 0.284567 9.98751 0.284567 9.63604 0.636039C9.28457 0.987511 9.28457 1.55736 9.63604 1.90883L14.7272 7L9.63604 12.0912C9.28457 12.4426 9.28457 13.0125 9.63604 13.364C9.98751 13.7154 10.5574 13.7154 10.9088 13.364L16.6364 7.6364ZM1 7V7.9H16V7V6.1H1V7Z"
                  fill="#fff"
                />
              </svg>
            </span>
          </Link>
        </div>
        <div className="footer_main">
          <div>
            <div className="footer_logo">
              <Link to="/">
                <img
                  width="186"
                  style={{ filter: "grayscale(1) brightness(1000%)" }}
                  src={Logo}
                  alt="Misam logo"
                />
              </Link>
            </div>
            <p className="footer_text">
              {language === "en"
                ? "Misam — Trusted partner for global telecom solutions, messaging, and network protection."
                : "Misam — Qlobal telekommunikasiya həlləri, mesajlaşma və şəbəkə qorunması üçün etibarlı tərəfdaş."}
            </p>
            <div className="social_links_f">
              <Link to="/" aria-label="facebook">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="/" aria-label="linkedin">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon={faTelegram} />
              </Link>
            </div>
          </div>

          <div className="footer_links">
            <ul>
              <h4>{language === "en" ? "Navigation" : "Naviqasiya"}</h4>
              <li>
                <Link to="/">{language === "en" ? "Home" : "Ana səhifə"}</Link>
              </li>
              <li>
                <Link to="/communication-apis">Communication APIs</Link>
              </li>
              <li>
                <Link to="/virtual-calling">Virtual Calling</Link>
              </li>
              <li>
                <Link to="/sip-trunking">SIP Trunking</Link>
              </li>
              <li>
                <Link to="/a2p-messaging">A2P SMS</Link>
              </li>
              <li>
                <Link to="/p2a-messaging">P2A SMS</Link>
              </li>
              <li>
                <Link to="/p2p-messaging">P2P SMS</Link>
              </li>
            </ul>
            <ul>
              <h4>{language === "en" ? "Contact us" : "Bizimlə Əlaqə"}</h4>
              <li>
                <a href="tel:+994555902775">+994 55 590 27 75</a>
              </li>
              <li>
                <a href="mailto:info@misam.pro">info@misam.pro</a>
              </li>
              <li>
                <Link to="https://maps.app.goo.gl/TiaAcmSUrzbczyzJ8">
                  {language === "en"
                    ? "Azerbaijan Republic, Baku 1014, Bulbul Avenue, Gulustan Residence"
                    : " Azerbaijan, Bakı 1014, Bülbül Prospekti, Gülüstan Residence"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_bottom">
          <span>© 2023 Misam. All rights reserved</span>
          <Link to="/">Use Terms & Conditions | Privacy Policy</Link>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding: 34px 0 64px;
  background-color: var(--black);

  @media screen and (max-width: 1280px) {
    padding: 34px 2% 64px;
  }

  @media screen and (max-width: 768px) {
    padding: 34px 2% 50px;
  }

  .footer_content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer_top {
    align-items: center;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
      display: none !important;
    }
  }

  .footer_top,
  .footer_main {
    display: flex;
    justify-content: space-between;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    padding-bottom: 50px;
    border-bottom: 4px;
    border-color: #0b0b0b;
    border-style: solid;
  }

  .footer_top h2 {
    font-weight: 600;
    font-size: 36px;
    color: var(--white);
  }

  .footer_top h2 span {
    color: var(--accent);
  }

  .footer_top a {
    border-radius: 23px;
    width: 202px;
    height: 47px;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    border: 1px solid var(--black);
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .footer_top a span:first-child {
    font-weight: 500;
    color: var(--white);
    font-size: 13px;
    background-color: var(--accent);
    height: 100%;
    width: 146px;
    border-radius: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer_top a span:last-child {
    width: 38px;
    height: 38px;
    background-color: var(--black);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
    transform: rotate(-45deg);
  }

  .footer_top a span:first-child,
  .footer_top a span:last-child {
    transition: all 0.3s ease-in-out;
  }

  .footer_top a:hover {
    background-color: var(--black);
    border-color: var(--white);
  }

  .footer_top a:hover span:first-child {
    background-color: var(--black);
    color: var(--white);
    transform: translateX(4px);
  }

  .footer_top a:hover span:last-child {
    background-color: var(--accent);
    transform: rotate(0deg) scale(1.1);
  }

  .footer_main {
    padding-top: 20px;
    padding-bottom: 70px;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
      gap: 20px;
    }
  }

  .footer_main .footer_text {
    color: var(--white);
    font-size: 12px;
    width: 100%;
    max-width: 320px;
    width: 100%;
    margin: 24px 0;
  }

  .footer_main .social_links_f {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 6px;
  }

  .footer_main .social_links_f a {
    width: 38px;
    height: 38px;
    background-color: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    border-radius: 50%;
    transition: all 0.3s ease;
    font-size: 18px;
    text-decoration: none;
  }

  .footer_main .social_links_f a:hover {
    background-color: var(--white);
    color: var(--accent);
    transform: scale(1.1);
  }

  .footer_links {
    display: flex;
    align-items: start;
    justify-content: end;
    gap: 60px;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      justify-content: start;
      gap: 30px;
    }
  }

  .footer_links ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .footer_links ul h4 {
    font-weight: 700;
    font-size: 18px;
    color: var(--accent);
    margin-bottom: 10px;
  }

  .footer_links ul li a {
    display: block;
    font-weight: 500;
    font-size: 14px;
    color: #939393;
    text-decoration: none;
    transition: all 0.3s ease;
    max-width: 146px;
    width: 100%;

    @media screen and (max-width: 768px) {
      max-width: 200px;
    }
  }

  .footer_links ul li a:hover {
    color: var(--accent);
    text-decoration: underline;
  }

  .footer_bottom {
    padding-top: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--white);
    font-weight: 400;
    font-size: 14px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 14px;
      font-size: 12px;
      align-items: start;
    }
  }

  .footer_bottom a {
    color: var(--white);
    transition: all;
  }

  .footer_bottom a:hover {
    text-decoration: underline;
  }
`;
