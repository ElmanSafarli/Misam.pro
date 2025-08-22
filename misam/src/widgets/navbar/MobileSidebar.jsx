// src/components/widgets/MobileSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavBTN } from "../../shared";
import { services } from "../../constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faXmark } from "@fortawesome/free-solid-svg-icons";

const MobileSidebar = ({ isOpen, onClose, servicesOpen, setServicesOpen }) => {
  return (
    <>
      {isOpen && <Overlay onClick={onClose} />}
      <SidebarWrapper className={isOpen ? "open" : ""}>
        <button className="close_btn" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <MenuWrapper>
          <ul>
            <li>
              <Link to="/" onClick={onClose}>
                Home
              </Link>
            </li>
            <li>
              <span
                className={`dropdown-toggle ${servicesOpen ? "open" : ""}`}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <FontAwesomeIcon icon={faAngleDown} className="arrow" />
              </span>
              <Dropdown className={servicesOpen ? "open" : ""}>
                <ul style={{ gap: "0" }}>
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
              </Dropdown>
            </li>
            <li>
              <Link to="/about" onClick={onClose}>
                About us
              </Link>
            </li>
          </ul>
        </MenuWrapper>

        <ContactWrapper>
          <NavBTN content="Contact" link="/contact" />
        </ContactWrapper>
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
  padding: 20px;
  transition: right 0.35s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.open {
    right: 0;
  }

  .close_btn {
    align-self: flex-end;
    font-size: 20px;
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
`;

const MenuWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 6px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 14px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      padding-bottom: 10px;

      a,
      span {
        color: var(--black);
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        cursor: pointer;
        transition: color 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &:hover {
          color: var(--accent);
        }

        .arrow {
          transition: transform 0.3s ease;
        }

        &.open .arrow {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

const Dropdown = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, opacity 0.3s ease;
  opacity: 0;

  &.open {
    max-height: calc(100vh - 160px);
    opacity: 1;
    overflow-y: auto;
  }

  ul {
    margin-top: 8px;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    li a {
      font-size: 14px;
      font-weight: 400;
      color: var(--grey-font);
      padding: 6px 0;

      &:hover {
        color: var(--accent);
      }
    }
  }
`;

const ContactWrapper = styled.div`
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
`;

export default MobileSidebar;
