// src/components/widgets/MobileSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavBTN } from "../../shared";
import { services } from "../../constants";

const MobileSidebar = ({ isOpen, onClose, servicesOpen, setServicesOpen }) => {
  return (
    <>
      {isOpen && <Overlay onClick={onClose} />}
      <SidebarWrapper className={isOpen ? "open" : ""}>
        <button className="close_btn" onClick={onClose}>
          ✕
        </button>
        <ul>
          <li>
            <Link to="/" onClick={onClose}>
              Home
            </Link>
          </li>
          <li>
            <span
              className="dropdown-toggle"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services ▾
            </span>
            {servicesOpen && (
              <ul className="dropdown-menu">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      to={service.link}
                      onClick={() => {
                        setServicesOpen(false);
                        onClose();
                      }}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <Link to="/about" onClick={onClose}>
              About us
            </Link>
          </li>
          <li>
            <NavBTN content="Contact" link="/contact" />
          </li>
        </ul>
      </SidebarWrapper>
    </>
  );
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 900;
  animation: fadeIn 0.3s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: -280px;
  width: 280px;
  height: 100%;
  background: var(--white);
  box-shadow: -2px 0 15px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  padding: 24px;
  transition: right 0.35s ease-in-out;
  display: flex;
  flex-direction: column;

  &.open {
    right: 0;
  }

  .close_btn {
    align-self: flex-end;
    font-size: 28px;
    font-weight: bold;
    background: none;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
    color: var(--black);
    transition: transform 0.2s ease;
    &:hover {
      transform: rotate(90deg);
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 18px;

      a,
      span {
        color: var(--black);
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
          color: var(--accent);
        }
      }

      .dropdown-menu {
        margin-top: 10px;
        padding-left: 12px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        li a {
          font-size: 16px;
          font-weight: 400;
          color: var(--grey-font);

          &:hover {
            color: var(--accent);
          }
        }
      }
    }
  }
`;

export default MobileSidebar;
