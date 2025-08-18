import React, { useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";

import { Logo, NavBTN } from "../../shared";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <StyledWrapper>
      <nav>
        <div className="navbar_container">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="Misam" />
            </Link>
          </div>

          <div className="nav_items">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Services</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>

          <div className="link">
            <NavBTN content="Contact" link="/contact" />
          </div>

          <div className="mobile_sidebar" onClick={() => setSidebarOpen(true)}>
            ☰
          </div>
        </div>
      </nav>

      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close_btn" onClick={() => setSidebarOpen(false)}>
          ✕
        </button>
        <ul>
          <li>
            <Link to="/" onClick={() => setSidebarOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setSidebarOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setSidebarOpen(false)}>
              About us
            </Link>
          </li>
          <li>
            <NavBTN content="Contact" link="/contact" />
          </li>
        </ul>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  nav {
    .navbar_container {
      position: fixed;
      top: 26px;
      left: 50%;
      transform: translateX(-50%);

      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: space-between;

      border: 1px solid #f8f8f8;
      border-radius: 20px;
      max-width: 836px;
      width: fit-content;
      height: 70px;
      box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.2);
      background: var(--white);

      .logo {
        border-right: 1px solid #f8f8f8;
        padding-right: 36px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          height: 100%;
          outline: none;

          @media (max-width: 768px) {
            height: 70%;
          }
          img {
            height: 100%;
            margin-left: 22px;
          }
        }
      }

      .nav_items {
        padding: 0 36px;
        ul {
          display: flex;
          list-style: none;
          li {
            margin: 0 10px;
            a {
              color: var(--grey-font);
              transition: all 0.3s ease-in-out;
              font-weight: 400;
              font-size: 15px;
              &:hover {
                color: var(--black);
              }
            }
          }
        }
        @media (max-width: 768px) {
          display: none;
        }
      }

      .link {
        border-left: 1px solid #f8f8f8;
        padding-left: 36px;
        height: 100%;
        display: flex;
        align-items: center;
        @media (max-width: 768px) {
          display: none;
        }
      }

      .mobile_sidebar {
        display: none;
        font-size: 24px;
        padding: 0 20px;
        cursor: pointer;
        @media (max-width: 768px) {
          display: block;
        }
      }
    }
  }

  /* ЗАТЕМНЕНИЕ */
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 900;
  }

  /* САЙДБАР */
  .sidebar {
    position: fixed;
    top: 0;
    right: -260px;
    width: 260px;
    height: 100%;
    background: var(--white);
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    padding: 20px;
    transition: right 0.3s ease-in-out;
    display: flex;
    flex-direction: column;

    &.open {
      right: 0;
    }

    .close_btn {
      align-self: flex-end;
      font-size: 24px;
      background: none;
      border: none;
      cursor: pointer;
    }

    ul {
      list-style: none;
      padding: 20px 0;
      li {
        margin: 15px 0;
        a {
          color: var(--black);
          font-size: 18px;
        }
      }
    }
  }
`;

export default Navbar;
