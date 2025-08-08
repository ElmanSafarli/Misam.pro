import React from "react";
import { Link } from "react-router";
import styled from "styled-components";

import { Logo, NavBTN } from "../../shared";

const Navbar = () => {
  return (
    <StyledWrapper>
      <nav>
        <div className="navbar_container">
          <div className="logo">
            <img src={Logo} alt="Misam" />
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
        </div>
      </nav>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  nav {
    .navbar_container {
      position: fixed; /* Добавлено */
      top: 0;
      left: 0;
      right: 0;
      margin: 0 auto; /* Центрируем */
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
      margin: 26px auto;

      .logo {
        border-right: 1px solid #f8f8f8;
        padding-right: 36px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          height: 80%;
          margin-left: 22px;
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
              outline: none;

              &:hover {
                color: var(--black);
              }
            }
          }
        }
      }

      .link {
        border-left: 1px solid #f8f8f8;
        padding-left: 36px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export default Navbar;
