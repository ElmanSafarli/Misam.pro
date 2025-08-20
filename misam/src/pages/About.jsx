import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ConsultExpert, Faq, Footer, Navbar, WhyChooseUs } from "../widgets";
import { Link } from "react-router";
import { services } from "../constants";
import { AboutPage } from "../shared";
import { Pagetitle } from "../modules";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const About = () => {
  const servicesRef = useRef(null);
  const handleScrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Pagetitle
        title="About Misam"
        description="Misam is a modern communication platform that helps brands reach their customers on their favorite devices — quickly, reliably, and at scale"
      />
      <StyledWrapper>
        <Navbar />

        <header>
          <motion.div
            className="header-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-block">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Misam helps implement effective{" "}
                <span>communication strategies</span> in the digital world
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Misam is a modern communication platform that helps brands reach
                their customers on their favorite devices — quickly, reliably,
                and at scale
              </motion.p>

              <motion.div
                className="cta"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Link to="/contact" className="btn-primary">
                  Get Started
                </Link>
                <button
                  onClick={handleScrollToServices}
                  className="btn-secondary"
                >
                  Learn More
                </button>
              </motion.div>
            </div>

            <motion.div
              className="image-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <img className="about-img" src={AboutPage} alt="About Misam" />
            </motion.div>
          </motion.div>
        </header>

        <section ref={servicesRef}>
          <motion.div
            className="services-content"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div className="services-group">
              {services.map((service, index) => (
                <motion.div
                  className="service-item"
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: -5,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link to={service.link}>
                    <div className="top">
                      <div className="icon">
                        <img src={service.icon} alt={service.title} />
                      </div>
                      <h3>{service.title}</h3>
                    </div>
                    <p>
                      {service.description.length > 100
                        ? service.description.slice(0, 100) + "..."
                        : service.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <WhyChooseUs />
        <Faq />
        <ConsultExpert />
        <Footer />
      </StyledWrapper>
    </>
  );
};

const StyledWrapper = styled.div`
  .header-content {
    background: linear-gradient(135deg, var(--black) 0%, #1e1e1e 100%);
    color: var(--white);
    padding: 240px 8% 140px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    gap: 40px;

    @media (max-width: 992px) {
      flex-direction: column;
      text-align: center;
      padding: 140px 6% 100px;
    }

    .text-block {
      max-width: 600px;
      z-index: 2;

      h1 {
        font-weight: 600;
        font-size: 36px;

        span {
          color: var(--accent);
        }

        @media (max-width: 768px) {
          font-size: 30px;
        }

        @media (max-width: 460px) {
          font-size: 24px;
        }
      }

      p {
        color: var(--grey-font);
        margin-top: 24px;
        font-size: 18px;
        line-height: 1.6;

        @media (max-width: 768px) {
          font-size: 16px;
        }

        @media (max-width: 460px) {
          font-size: 14px;
        }
      }

      .cta {
        margin-top: 36px;
        display: flex;
        gap: 16px;

        @media (max-width: 768px) {
          justify-content: center;
        }

        @media (max-width: 460px) {
          gap: 8px;
        }

        .btn-primary,
        .btn-secondary {
          padding: 12px 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 16px;
          border-radius: 10px;
          cursor: pointer;
          @media (max-width: 460px) {
            padding: 10px 20px;
            font-size: 14px;
          }
        }

        .btn-primary {
          background: var(--accent);
          color: var(--white);

          &:hover {
            background: var(--white);
            color: var(--accent);
          }
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid var(--white);
          color: var(--white);

          &:hover {
            background: var(--white);
            color: var(--black);
          }
        }
      }
    }

    .image-block {
      position: relative;

      .about-img {
        width: 100%;
        max-width: 500px;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      }
    }
  }

  .services-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 0;

    .services-group {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;

      @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 24px;
        padding: 0 4%;
      }

      @media (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .service-item {
        border-radius: 18px;
        border: 2px solid #dfdfdfff;
        padding: 28px 22px;
        background: var(--white);
        perspective: 1000px;
        transition: transform 0.3s ease;

        &:hover {
          background: var(--black);
          border-color: var(--accent);
        }

        &:hover h3,
        &:hover p {
          color: var(--white) !important;
        }

        &:hover .icon img {
          filter: brightness(0) invert(1);
        }

        .top {
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 12px;

          .icon {
            img {
              width: 38px;
              height: 38px;
              transition: all 0.3s ease;
            }
          }

          h3 {
            transition: all 0.3s ease;
            font-weight: 600;
            font-size: 18px;
            color: var(--black);
          }
        }

        p {
          transition: all 0.3s ease;
          font-weight: 400;
          color: var(--black);
          font-size: 14px;
        }
      }
    }
  }
`;

export default About;
