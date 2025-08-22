import React, { useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { Footer, Navbar } from "../widgets";
import { Pagetitle } from "../modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import ReactFlagsSelect from "react-flags-select";

const About = () => {
  const [selected, setSelected] = useState("RU");
  return (
    <>
      <Pagetitle
        title="Misam | Contact Us"
        description="Contact Us Page | Misam"
      />
      <StyledWrapper>
        <Navbar />

        <section id="contact_us">
          <div className="section_name" style={{ justifyContent: "start" }}>
            <div></div>
            <p>Contact Us</p>
          </div>
          <h2 className="contact_us_title" style={{ color: "var(--black)" }}>
            Join Us in Creating <br />
            <span>Something Great</span>
          </h2>
          <div className="contact_us_form">
            <form action="">
              <div className="contact_us_inputs">
                <div className="grid_input">
                  <div className="user_input">
                    <input type="text" name="username" id="username" required />
                    <label htmlFor="username">First Name*</label>
                  </div>
                  <div className="user_input">
                    <input type="text" name="lastname" id="lastname" required />
                    <label htmlFor="lastname">Last Name*</label>
                  </div>
                  <div className="user_input">
                    <input
                      type="text"
                      name="user_position"
                      id="user_position"
                      required
                    />
                    <label htmlFor="user_position">Position*</label>
                  </div>
                  <div className="user_input">
                    <input
                      type="text"
                      name="company_name"
                      id="company_name"
                      required
                    />
                    <label htmlFor="company_name">Company Name*</label>
                  </div>
                  <div className="user_input">
                    <input type="email" name="email" id="email" required />
                    <label htmlFor="email">Company Email*</label>
                  </div>
                  <div className="user_input">
                    <input
                      type="url"
                      name="company_url"
                      id="company_url"
                      pattern="https://.*"
                      required
                    />
                    <label htmlFor="company_url">Website URL</label>
                  </div>
                  <div className="user_input">
                    <input
                      type="tel"
                      name="user_phone"
                      id="user_phone"
                      required
                    />
                    <label htmlFor="user_phone">Phone number</label>
                  </div>
                  <div className="user_input">
                    <ReactFlagsSelect
                      selected={selected}
                      onSelect={(code) => setSelected(code)}
                      placeholder="Select Country"
                      searchable
                    />
                  </div>
                </div>
                <div className="user_input user_textarea">
                  <textarea
                    name="user_message"
                    id="user_message"
                    required
                  ></textarea>
                  <label htmlFor="user_message">Message*</label>
                </div>
              </div>
              <button className="contact_us_btn" type="submit">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <h4>Adress</h4>
                <p>
                  Azerbaijan Republic, Baku 1014, Bülbül Prospekti, Gulustan
                  Residence
                </p>
              </div>

              <div className="contact-info-item">
                <h4>Contact</h4>
                <p>
                  Phone : <a href="tel:+994555902775">+994 55 590 2775</a>
                </p>
                <p>
                  Email : <a href="mailto:info@misam.pro">info@misam.pro</a>
                </p>
              </div>

              <div className="contact-info-item">
                <h4>Open Time</h4>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday - Sunday: Closed</p>
              </div>

              <div className="contact-info-item">
                <h4>Stay Connected</h4>
                <div className="social_medias">
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
            </div>
          </div>
        </section>

        <Footer />
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  .ReactFlagsSelect-module_flagsSelect__2pfa2 {
    width: 100% !important;
    padding: 0 20px !important;

    @media (max-width: 420px) {
      padding: 0 6px !important;
    }

    .ReactFlagsSelect-module_selectBtn__19wW7 {
      border: none !important;
      padding: 0 !important;
      color: #c5c5c5 !important;
      font-weight: 500 !important;
      font-size: 14px !important;

      @media (max-width: 420px) {
        font-size: 12px !important;
      }
    }
    .ReactFlagsSelect-module_selectFlag__2q5gC {
      font-size: 2rem !important;

      @media (max-width: 420px) {
        font-size: 1.2rem !important;
      }
    }
  }
  #contact_us {
    padding: 100px 0;
    max-width: 1200px;
    margin: 6% auto 0;

    @media (max-width: 1280px) {
      padding: 100px 4%;
    }

    @media (max-width: 420px) {
      padding: 100px 2%;
    }
  }
  .contact_us_title {
    font-weight: 700;
    font-size: 36px;
    color: var(--white);
    line-height: 131%;
    margin-bottom: 48px;
    margin-top: 26px;

    @media (max-width: 1024px) {
      font-size: 28px;
    }

    @media (max-width: 420px) {
      font-size: 20px;
      margin-bottom: 20px;
      margin-top: 14px;
    }
  }

  .contact_us_title span {
    color: var(--accent);
  }

  .contact-info {
    background-color: var(--accent);
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    gap: 58px;
    border-radius: 20px;
    width: 400px;
    padding: 32px 26px;

    @media (max-width: 1024px) {
      width: 100%;
    }

    @media (max-width: 420px) {
      gap: 40px;
    }
  }

  .contact-info .contact-info-item h4 {
    font-weight: 600;
    font-size: 22px;
    color: var(--white);
    margin-bottom: 18px;

    @media (max-width: 420px) {
      font-size: 18px;
      margin-bottom: 12px;
    }
  }

  .contact-info .contact-info-item p,
  .contact-info .contact-info-item a {
    font-weight: 400;
    font-size: 15px;
    color: var(--white);

    @media (max-width: 420px) {
      font-size: 14px;
    }
  }

  .contact-info .contact-info-item .social_medias {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 18px;
  }

  .contact-info .contact-info-item .social_medias a {
    color: var(--white);
    background-color: transparent;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border: solid 12px var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--accent);
    transition: 0.3s ease-in-out;
  }

  .contact-info .contact-info-item .social_medias a:hover {
    background-color: var(--white);
    color: var(--accent);
  }

  .contact_us_inputs .grid_input {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 18px;
    grid-row-gap: 20px;

    @media (max-width: 480px) {
      grid-column-gap: 4px;
      grid-row-gap: 4px;
    }
  }

  .contact_us_form {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 26px;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }
  .section_name {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .section_name div {
    background-color: var(--accent);
    height: 2px;
    width: 26px;
    border-radius: 2px;
  }

  .section_name p {
    font-size: 16px;
    color: var(--grey);
    font-weight: 500;

    @media (max-width: 420px) {
      font-size: 14px;
    }
  }

  .contact_us_form form {
    flex: 1;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }

  .contact_us_inputs .user_input {
    height: 60px;
    background: #1a1a1a;
    width: 100%;
    border-radius: 12px;
    position: relative;
    display: flex;
    align-items: center;

    @media (max-width: 420px) {
      height: 50px;
    }
  }

  .contact_us_inputs .user_input input,
  .contact_us_inputs .user_textarea textarea {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    color: var(--white);
    padding: 0 20px;
    background-color: #1a1a1a;
    border-radius: 12px;
  }

  .contact_us_inputs .user_textarea textarea {
    padding: 20px;
    resize: none;
  }

  .contact_us_inputs .user_input label,
  .contact_us_inputs .user_textarea label {
    padding: 0 20px;
    position: absolute;
    top: 50%;
    transition: 0.5s;
    z-index: 1000;
    transform: translateY(-50%);
    left: 20px;
    pointer-events: none;
    font-weight: 500;
    font-size: 14px;
    color: #c5c5c5;

    @media (max-width: 420px) {
      font-size: 12px;
      padding: 0 4px;
    }
  }

  .country-select.inside input,
  .country-select.inside input[type="text"] {
    font-weight: 500;
    font-size: 14px;
    color: #c5c5c5;
    font-family: "Poppins", sans-serif;
  }

  .contact_us_inputs .user_textarea label {
    top: 40px;
  }

  .user_textarea {
    margin-top: 20px;
    background-color: #1a1a1a;
    height: 198px !important;

    @media (max-width: 420px) {
      height: 150px !important;
      margin-top: 8px;
    }
  }

  .contact_us_inputs .user_input input:focus + label,
  .contact_us_inputs .user_input input.filled + label,
  .contact_us_inputs .user_textarea textarea:focus + label,
  .contact_us_inputs .user_textarea textarea.filled + label {
    top: 0;
    left: 22px;
    font-size: 12px;
    z-index: 99999;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill {
    box-shadow: 0 0 0 1000px #1a1a1a inset !important;
    -webkit-text-fill-color: #fff !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  .country-select {
    width: 100%;
    height: 100%;
    padding: 0 20px;
  }

  .country-select.inside .selected-flag {
    margin-left: 20px;
  }

  .contact_us_form form .contact_us_btn {
    border-radius: 16px;
    padding: 24px 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent);
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
    border: none;
    font-weight: 500;
    font-size: 20px;
    color: var(--white);
    margin-top: 20px;

    @media (max-width: 420px) {
      width: 100%;
      font-size: 16px;
      padding: 18px 64px;
    }
  }

  .contact_us_form form .contact_us_btn span {
    display: block;
    margin-left: 16px;
    transition: all 0.3s ease-in-out;
  }

  .contact_us_form form .contact_us_btn svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  .contact_us_form form .contact_us_btn:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  .contact_us_form form .contact_us_btn:hover svg {
    transform: translateX(1.5em) rotate(45deg) scale(1.1);
  }

  .contact_us_form form .contact_us_btn:hover span {
    transform: translateX(12em);
  }

  .contact_us_form form .contact_us_btn:active {
    transform: scale(0.95);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }

    to {
      transform: translateY(-0.1em);
    }
  }
`;

export default About;
