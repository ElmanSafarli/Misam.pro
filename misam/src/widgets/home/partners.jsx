import React from "react";
import styled, { keyframes } from "styled-components";

const importAll = (r) => r.keys().map(r);
const logos = importAll(
  require.context(
    "../../shared/assets/partner_logos",
    false,
    /\.(png|jpe?g|svg|webp)$/
  )
);

const Partners = () => {
  const allLogos = [...logos, ...logos];

  return (
    <StyledWrapper>
      <div className="scroll-container">
        <div className="shadow"></div>
        <div className="partner-logos">
          <div className="logo-track">
            {allLogos.map((logo, idx) => (
              <img src={logo} alt={`partner-${idx}`} key={idx} />
            ))}
          </div>
        </div>
        <div className="shadow"></div>
      </div>
    </StyledWrapper>
  );
};

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const StyledWrapper = styled.div`
  background-color: var(--white);
  margin-top: 152px;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 120px;
  }

  @media (max-width: 460px) {
    margin-top: 60px;
  }

  .scroll-container {
    border-top: 2px solid #f3f3f3;
    border-bottom: 2px solid #f3f3f3;

    .shadow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100px;
      height: 200px;
      pointer-events: none;

      @media (max-width: 768px) {
        width: 40px;
        height: 140px;
      }
    }
    .shadow:nth-child(1) {
      left: 0;
      border-right: 2px solid #f3f3f3;
    }

    .shadow:nth-child(3) {
      right: 0;
      border-left: 2px solid #f3f3f3;
    }

    &:hover .logo-track {
      animation-play-state: paused;
    }
  }
  .partner-logos {
    margin: auto;
    width: 80%;
    overflow: hidden;

    @media (max-width: 768px) {
      width: calc(100% - 80px);
    }

    .logo-track {
      display: flex;
      gap: 40px;
      animation: ${scroll} 60s linear infinite;
      width: fit-content;
      padding: 46px 20px;

      @media (max-width: 768px) {
        padding: 30px 10px;
      }
    }
  }

  .logo-track img {
    height: 34px;
    filter: grayscale(100%);
    opacity: 0.8;
    transition: 0.3s;
    flex-shrink: 0;

    @media (max-width: 768px) {
      height: 26px;
    }
  }

  .logo-track img:hover {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.05);
  }
`;

export default Partners;
