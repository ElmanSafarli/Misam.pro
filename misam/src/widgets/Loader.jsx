import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="blob" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .blob {
    width: 112px;
    height: 112px;
    display: grid;
    background: #fff;
    filter: blur(5.6px) contrast(10);
    padding: 11.2px;
    mix-blend-mode: darken;
  }

  .blob:before,
  .blob:after {
    content: "";
    grid-area: 1/1;
    width: 44.8px;
    height: 44.8px;
    background: var(--black);
    animation: blob-rhf26m 2s infinite;
  }

  .blob:after {
    animation-delay: -1s;
  }

  @keyframes blob-rhf26m {
    0% {
      transform: translate(0, 0);
    }

    25% {
      transform: translate(100%, 0);
    }

    50% {
      transform: translate(100%, 100%);
    }

    75% {
      transform: translate(0, 100%);
    }

    100% {
      transform: translate(0, 0);
    }
  }
`;

export default Loader;
