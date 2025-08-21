import React from "react";
import styled from "styled-components";
import { Logo } from "../shared";
import { Link } from "react-router";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer_inner">
        <div className="footer_left">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <address>
            Azerbaijan Republic, Baku 1014, Bülbül Prospekti, Gulustan Residence
          </address>
          {/* <form className="subscribe_form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form> */}
        </div>

        <div className="footer_links">
          <div className="column">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Talk to an expert</Link>
          </div>

          <div className="column">
            <h4>Solutions</h4>
            <Link to="/communication-apis">Communication APIs</Link>
            <Link to="/virtual-calling">Virtual Calling</Link>
            <Link to="/sip-trunking">SIP Trunking</Link>
            <Link to="/a2p-messaging">A2P SMS</Link>
            <Link to="/p2a-messaging">P2A SMS</Link>
            <Link to="/p2p-messaging">P2P SMS</Link>
          </div>

          {/* <div className="column">
            <h4>Support</h4>
            <a href="#faq">FAQ</a>
            <a href="#articles">Articles</a>
            <a href="#community">Community</a>
            <a href="#help-center">Help Center</a>
          </div> */}
        </div>
      </div>

      <div className="footer_bottom">
        © 2025 Misam. All Rights Reserved | Terms of Use
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  padding: 60px 0 40px;

  .footer_inner {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer_left {
    max-width: 300px;

    .logo {
      img {
        height: 90px;
      }
    }

    address {
      font-style: normal;
      font-size: 14px;
      line-height: 1.5;
      color: #777;
      margin-bottom: 20px;
      width: 100%;
      max-width: 280px;
    }

    .subscribe_form {
      display: flex;
      gap: 8px;

      input {
        flex: 1;
        padding: 10px 15px;
        border: 1px solid var(--grey-font);
        border-radius: 6px;
        font-size: 0.9rem;
        outline: none;
        transition: border-color 0.3s ease;

        &:focus {
          border-color: var(--accent);
        }
      }

      button {
        background: var(--accent);
        border: none;
        padding: 10px 18px;
        color: white;
        font-weight: 600;
        border-radius: 6px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background: var(--accent);
        }
      }
    }
  }

  .footer_links {
    display: flex;
    gap: 60px;

    .column {
      display: flex;
      flex-direction: column;

      h4 {
        font-weight: 700;
        margin-bottom: 16px;
        color: #222;
      }

      a {
        color: var(--grey-font);
        margin-bottom: 12px;
        font-size: 15px;
        max-width: 168px;
        transition: color 0.3s ease;

        &:hover {
          color: var(--accent);
        }
      }
    }
  }

  .footer_bottom {
    max-width: 1200px;
    margin: 30px auto 0;
    font-size: 0.8rem;
    color: #999;
    text-align: center;
  }

  @media (max-width: 900px) {
    padding: 30px 20px;

    .footer_inner {
      flex-direction: column;
      gap: 30px;
    }

    .footer_links {
      gap: 40px;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 480px) {
    .footer_left {
      max-width: 100%;

      .subscribe_form {
        flex-direction: column;

        input,
        button {
          width: 100%;
        }

        button {
          margin-top: 8px;
        }
      }
    }

    .footer_links {
      flex-direction: column;
      gap: 25px;
      align-items: center;

      .column {
        align-items: center;

        h4,
        a {
          text-align: center;
        }
      }
    }
  }
`;
