import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const LangDropdown = ({ language, setLanguage }) => {
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: "English", flag: "EN" },
    { code: "az", label: "Azərbaycan", flag: "🇦🇿" },
  ];

  const current = languages.find((l) => l.code === language);

  const handleSelect = (code) => {
    setLanguage(code);
    setOpen(false);
  };

  return (
    <DropdownWrapper>
      <button className="dropdown-toggle" onClick={() => setOpen(!open)}>
        <span className="flag">{current.flag}</span>
        <motion.span
          className="arrow"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="dropdown-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {languages.map((lang) => (
              <li key={lang.code}>
                <button onClick={() => handleSelect(lang.code)}>
                  <span className="flag">{lang.flag}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;

  .dropdown-toggle {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background: #1e1e1e;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  }

  .flag {
    font-size: 16px;
  }

  .arrow {
    font-size: 12px;
    margin-left: 4px;
  }

  .dropdown-menu {
    position: absolute;
    top: 110%;
    right: 0;
    background: #2c2c2c;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 100;
  }

  .dropdown-menu li button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    width: 100%;
    background: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: background 0.2s;
  }

  .dropdown-menu li button:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export default LangDropdown;
