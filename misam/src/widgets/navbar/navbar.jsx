import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Logo, NavBTN } from "../../shared";
import { services } from "../../constants";
import { MobileSidebar } from "../../widgets";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              <li ref={servicesRef} className="dropdown">
                <span
                  className="dropdown-toggle"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <FontAwesomeIcon icon={faCaretDown} />
                </span>
                {servicesOpen && (
                  <ul className="dropdown-menu">
                    {services.map((service, idx) => (
                      <li key={idx}>
                        <Link
                          to={service.link}
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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

      <MobileSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        servicesOpen={servicesOpen}
        setServicesOpen={setServicesOpen}
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  nav {
    position: relative;
    z-index: 1001;
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

          .dropdown-toggle {
            display: flex;
            align-items: center;
            gap: 4px;
          }

          li {
            position: relative;
            margin: 0 10px;
            a,
            span {
              color: var(--grey-font);
              transition: all 0.3s ease-in-out;
              font-weight: 400;
              font-size: 15px;
              cursor: pointer;
              display: inline-flex;
              align-items: center;
              gap: 6px;
              white-space: nowrap;

              &:hover {
                color: var(--black);
              }
            }
          }
          .dropdown-menu {
            position: absolute;
            top: 60px;
            left: 0;
            background: var(--white);
            border: 1px solid #eee;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            list-style: none;
            padding: 10px;
            min-width: 220px;
            z-index: 10;
            display: flex;
            flex-direction: column;
            border-radius: 4px;

            li {
              margin: 0;
              padding: 0;
              a {
                display: block;
                padding: 8px 10px;
                font-size: 14px;
                color: var(--black);
                border-radius: 4px;
                &:hover {
                  background: var(--accent);
                  color: var(--white);
                }
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

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 900;
  }

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
      margin: 0;
      li {
        a,
        span {
          color: var(--black);
          font-size: 18px;
          cursor: pointer;
        }
        .dropdown-menu {
          margin-top: 10px;
          padding-left: 10px;
          li a {
            font-size: 16px;
          }
        }
      }
    }
  }
`;

export default Navbar;
