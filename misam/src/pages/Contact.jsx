import React from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { Footer, Navbar } from "../widgets";
import { Pagetitle } from "../modules";

const About = () => {
  return (
    <>
      <Pagetitle
        title="Misam | Contact Us"
        description="Contact Us Page | Misam"
      />
      <StyledWrapper>
        <Navbar />

        <section id="contact_us">
          <div class="section_name" style={{ justifyContent: "start" }}>
            <div></div>
            <p>Contact Us</p>
          </div>
          <h2 class="contact_us_title" style={{ color: "var(--black)" }}>
            Join Us in Creating <br />
            <span>Something Great</span>
          </h2>
          <div class="contact_us_form">
            <form action="">
              <div class="contact_us_inputs">
                <div class="grid_input">
                  <div class="user_input">
                    <input type="text" name="username" id="username" required />
                    <label for="username">First Name*</label>
                  </div>
                  <div class="user_input">
                    <input type="text" name="lastname" id="lastname" required />
                    <label for="lastname">Last Name*</label>
                  </div>
                  <div class="user_input">
                    <input
                      type="text"
                      name="user_position"
                      id="user_position"
                      required
                    />
                    <label for="user_position">Position*</label>
                  </div>
                  <div class="user_input">
                    <input
                      type="text"
                      name="company_name"
                      id="company_name"
                      required
                    />
                    <label for="company_name">Company Name*</label>
                  </div>
                  <div class="user_input">
                    <input type="email" name="email" id="email" required />
                    <label for="email">Company Email*</label>
                  </div>
                  <div class="user_input">
                    <input
                      type="url"
                      name="company_url"
                      id="company_url"
                      pattern="https://.*"
                      required
                    />
                    <label for="company_url">Website URL</label>
                  </div>
                  <div class="user_input">
                    <input
                      type="tel"
                      name="user_phone"
                      id="user_phone"
                      required
                    />
                    <label for="user_phone">Phone number</label>
                  </div>
                  <div class="user_input">
                    <input type="text" id="country_selector" name="country" />
                  </div>
                </div>
                <div class="user_input user_textarea">
                  <textarea
                    name="user_message"
                    id="user_message"
                    required
                  ></textarea>
                  <label for="user_message">Message*</label>
                </div>
              </div>
              <button type="submit">
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
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
            <div class="contact-info">
              <div class="contact-info-item">
                <h4>Adress</h4>
                <p>Ithakis 3 C1-301, Nicosia, Strovolos 2058, CY</p>
              </div>

              <div class="contact-info-item">
                <h4>Contact</h4>
                <p>
                  Phone : <a href="tel:+35724020230">+35724020230</a>
                </p>
                <p>
                  Email :
                  <a href="mailto:info@stertell.com">info@stertell.com</a>
                </p>
              </div>

              <div class="contact-info-item">
                <h4>Open Time</h4>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday - Sunday: Closed</p>
              </div>

              <div class="contact-info-item">
                <h4>Stay Connected</h4>
                <div class="social_medias">
                  <Link
                    to="https://www.facebook.com/profile.php?id=100086738514430"
                    aria-label="facebook"
                  >
                    <i class="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/company/stertell/"
                    aria-label="linkedin"
                  >
                    <i class="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link to="">
                    <i class="fa-brands fa-telegram"></i>
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
  #contact_us {
    padding: 100px 0;
    max-width: 1200px;
    margin: 6% auto 0;
  }
  .contact_us_title {
    font-weight: 700;
    font-size: 36px;
    color: var(--white);
    line-height: 131%;
    margin-bottom: 48px;
    margin-top: 26px;
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
  }

  .contact-info .contact-info-item h4 {
    font-weight: 600;
    font-size: 22px;
    color: var(--white);
    margin-bottom: 18px;
  }

  .contact-info .contact-info-item p,
  .contact-info .contact-info-item a {
    font-weight: 400;
    font-size: 15px;
    color: var(--white);
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
  }

  .contact_us_form {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 26px;
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
  }

  .contact_us_form form {
    flex: 1;
  }

  .contact_us_inputs .user_input {
    height: 60px;
    background: #1a1a1a;
    width: 100%;
    border-radius: 12px;
    /* overflow: hidden; */
    position: relative;
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

  .contact_us_form form button {
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
  }

  .contact_us_form form button span {
    display: block;
    margin-left: 16px;
    transition: all 0.3s ease-in-out;
  }

  .contact_us_form form button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  .contact_us_form form button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  .contact_us_form form button:hover svg {
    transform: translateX(1.5em) rotate(45deg) scale(1.1);
  }

  .contact_us_form form button:hover span {
    transform: translateX(12em);
  }

  .contact_us_form form button:active {
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
