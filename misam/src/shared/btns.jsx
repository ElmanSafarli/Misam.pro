import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBTN = ({ content, link }) => {
  return (
    <StyleNavBtn>
      <Link className="nav-btn" to={link}>
        <div className="original">{content}</div>
        <div className="letters">
          {content.split("").map((letter, index) => (
            <span key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
              {letter}
            </span>
          ))}
        </div>
      </Link>
    </StyleNavBtn>
  );
};

const StyleNavBtn = styled.div`
  .nav-btn,
  .nav-btn *,
  .nav-btn :after,
  .nav-btn :before,
  .nav-btn:after,
  .nav-btn:before {
    border: 0 solid;
    box-sizing: border-box;
  }

  .nav-btn {
    margin-right: 12px;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: button;
    background-color: var(--accent);
    background-image: none;
    color: var(--white);
    cursor: pointer;
    font-size: 100%;
    line-height: 1.5;
    -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
    padding: 0;
  }

  .nav-btn:disabled {
    cursor: default;
  }

  .nav-btn:-moz-focusring {
    outline: auto;
  }

  .nav-btn svg {
    display: block;
    vertical-align: middle;
  }

  .nav-btn [hidden] {
    display: none;
  }

  .nav-btn {
    border: 1px solid;
    border-radius: 10px;
    box-sizing: border-box;
    display: block;
    font-weight: 600;
    overflow: hidden;
    padding: 12px 24px;
    position: relative;
  }

  .nav-btn .original {
    background: var(--black);
    color: var(--white);
    display: grid;
    inset: 0;
    place-content: center;
    position: absolute;
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1);
  }

  .nav-btn:hover .original {
    transform: translateY(100%);
  }

  .nav-btn .letters {
    display: inline-flex;
  }

  .nav-btn span {
    opacity: 0;
    transform: translateY(-15px);
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.2s;
  }

  .nav-btn span:nth-child(2n) {
    transform: translateY(15px);
  }

  .nav-btn:hover span {
    opacity: 1;
    transform: translateY(0);
  }

  .nav-btn:hover span:nth-child(2) {
    transition-delay: 0.1s;
  }

  .nav-btn:hover span:nth-child(3) {
    transition-delay: 0.2s;
  }

  .nav-btn:hover span:nth-child(4) {
    transition-delay: 0.3s;
  }

  .nav-btn:hover span:nth-child(5) {
    transition-delay: 0.4s;
  }

  .nav-btn:hover span:nth-child(6) {
    transition-delay: 0.5s;
  }
`;
