import React from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { motion } from "framer-motion";

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const About = () => {
  return (
    <StyledWrapper>
      <section>
        <div className="about-content">
          <motion.div
            className="about-l"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="top">
              <div className="section_name">
                <p>About us</p>
              </div>
              <h2>
                Misam helps implement effective communication strategies in the
                digital world.
              </h2>
            </div>
            <div className="bottom">
              <p>
                Misam is a modern communication platform that helps brands reach
                their customers on their favorite devices — quickly, reliably,
                and at scale.
              </p>
              <Link to="/about">Read more</Link>
            </div>
          </motion.div>

          <motion.div
            className="about-r"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="stats-box">
              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>

              <h3>
                <strong>120k</strong> Users
              </h3>
              <p>
                Recruiters and hiring managers trust our tools to simplify
                decision-making and reduce time-to-hire.
              </p>
            </div>

            <div className="stats-box">
              <div className="corner top-left"></div>
              <div className="corner top-right"></div>
              <div className="corner bottom-left"></div>
              <div className="corner bottom-right"></div>

              <h3>
                <strong>95%</strong> Satisfaction
              </h3>
              <p>
                Our clients report better engagement and higher efficiency using
                our solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  padding: 140px 4%;

  @media (max-width: 420px) {
    padding: 120px 4% 60px;
  }

  .about-content {
    display: flex;
    justify-content: space-between;
    position: relative;
    gap: 20px;
    width: 80%;
    margin: 0 auto;
    transition: all 0.3s ease;

    @media (max-width: 1200px) {
      width: 100%;
    }

    @media (max-width: 840px) {
      flex-direction: column;
    }

    .about-l {
      .top {
        .section_name {
          p {
            color: var(--grey-font);
            font-weight: 400;
            font-size: 16px;
          }
        }
        h2 {
          font-weight: 600;
          font-size: 30px;
          max-width: 570px;
          width: 100%;

          @media (max-width: 640px) {
            font-size: 22px;
          }
        }
      }
      .bottom {
        p {
          color: var(--grey-font);
          font-weight: 400;
          font-size: 15px;
          max-width: 458px;
          width: 100%;
          margin-top: 150px;

          @media (max-width: 840px) {
            margin-top: 20px;
          }
        }

        a {
          padding: 14px 20px;
          background-color: var(--accent);
          color: var(--white);
          border-radius: 10px;
          font-weight: 500;
          display: inline-block;
          margin-top: 20px;
          transition: all 0.3s ease;

          &:hover {
            background-color: var(--black);
          }
        }
      }
    }

    .about-r {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;
      position: relative;

      .stats-box {
        position: relative;
        padding: 28px 30px;
        width: 480px;
        background: rgba(255, 255, 255, 0.02);
        border-radius: 10px;
        transition: transform 0.3s ease;
        backdrop-filter: blur(6px);
        transition: all 0.3s ease;

        @media (max-width: 1020px) {
          width: 392px;
        }

        @media (max-width: 840px) {
          width: 100%;
        }

        @media (max-width: 640px) {
          padding: 24px 20px;
        }

        &:hover {
          transform: translateY(-5px);
        }

        p {
          font-weight: 400;
          font-size: 15px;
          color: var(--grey-font);
          max-width: 330px;
          width: 100%;
          margin-top: 20px;
        }

        .corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: var(--accent);
          border-style: solid;
          transition: transform 0.4s ease;
        }

        &:hover .corner.top-left {
          transform: translate(-4px, -4px);
        }
        &:hover .corner.top-right {
          transform: translate(4px, -4px);
        }
        &:hover .corner.bottom-left {
          transform: translate(-4px, 4px);
        }
        &:hover .corner.bottom-right {
          transform: translate(4px, 4px);
        }

        .top-left {
          top: 0;
          left: 0;
          border-width: 2px 0 0 2px;
        }

        .top-right {
          top: 0;
          right: 0;
          border-width: 2px 2px 0 0;
        }

        .bottom-left {
          bottom: 0;
          left: 0;
          border-width: 0 0 2px 2px;
        }

        .bottom-right {
          bottom: 0;
          right: 0;
          border-width: 0 2px 2px 0;
        }
      }
    }

    .about-r:before {
      content: "";
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at center,
        rgba(0, 255, 0, 0.08),
        transparent 60%
      );
      animation: pulse-bg 6s ease-in-out infinite;
      background-size: 200% 200%;
      z-index: -1;
    }
  }

  @keyframes pulse-bg {
    0% {
      background-position: 50% 50%;
    }
    50% {
      background-position: 55% 45%;
    }
    100% {
      background-position: 50% 50%;
    }
  }
`;

export default About;
