import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { A2P, API, P2A, P2P, SIP, VirtualCall } from "../../shared";

const services = [
  {
    title: "A2P SMS",
    description:
      "Empower your app with A2P messaging! Reach users directly with high-delivery messaging for marketing, notifications, and more.",
    img: A2P,
  },
  {
    title: "P2A SMS",
    description:
      "Enhance user interaction with P2A messaging! Enable interactive services like surveys and info retrieval.",
    img: P2A,
  },
  {
    title: "P2P SMS",
    description:
      "P2P SMS (Person-to-Person messaging) is a technology that allows individuals to send text messages directly to each other through your platform. This method of communication is used for a variety of purposes:",
    img: P2P,
  },
  {
    title: "SIP Trunking",
    description:
      "Efficient voice communication with SIP-Trunking! Reduce costs and improve flexibility.",
    img: SIP,
  },
  {
    title: "Virtual Calling",
    description:
      "Expand possibilities with Virtual Calling! Conduct high-quality virtual meetings and webinars worldwide.",
    img: VirtualCall,
  },
  {
    title: "Communication APIs",
    description:
      "Integrate communication seamlessly with our API! Support messaging, voice, and video calls effortlessly, tailored to your business needs.",
    img: API,
  },
];

const Services = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const [cardsPerStep, setCardsPerStep] = useState(4);

  useEffect(() => {
    const updateStep = () => {
      if (window.innerWidth <= 768) {
        setCardsPerStep(2);
        setVisibleCount(2);
      } else {
        setCardsPerStep(4);
        setVisibleCount(4);
      }
    };

    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, []);

  const handleLoadMore = () => {
    if (visibleCount >= services.length) {
      setVisibleCount(cardsPerStep);
    } else {
      setVisibleCount((prev) => Math.min(prev + cardsPerStep, services.length));
    }
  };

  return (
    <StyledWrapper>
      <div className="section-header">
        <h2>Our products</h2>
        <p>
          We provide all-in-one SMS services — from data cleaning to campaign
          launch — with a simple interface that integrates seamlessly into your
          business.
        </p>
      </div>

      <ul className="card-list">
        {services.slice(0, visibleCount).map((service, index) => (
          <motion.li
            className="card"
            key={index}
            layoutId={`card-${service.title}`}
            onClick={() => setActiveCard(service)}
          >
            <motion.div
              className="card-content"
              layoutId={`content-${service.title}`}
            >
              <motion.div
                className="card-image-container"
                layoutId={`image-${service.title}`}
              >
                <img src={service.img} alt={service.title} />
              </motion.div>
              <motion.div
                className="title-container"
                layoutId={`title-${service.title}`}
              >
                <span>Product {index + 1}</span>
                <h3>{service.title}</h3>
              </motion.div>
            </motion.div>
          </motion.li>
        ))}
      </ul>

      {/* Кнопка */}
      {services.length > cardsPerStep && (
        <div className="load-more-container">
          <button onClick={handleLoadMore}>
            {visibleCount >= services.length ? "Show Less" : "Load More"}
          </button>
        </div>
      )}

      {/* Модальное окно */}
      <AnimatePresence>
        {activeCard && (
          <>
            <motion.div
              className="card-overlay"
              onClick={() => setActiveCard(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="card-content-container open"
              layoutId={`card-${activeCard.title}`}
              onClick={() => setActiveCard(null)}
            >
              <motion.div
                className="open-card-content"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div
                  className="card-img"
                  layoutId={`image-${activeCard.title}`}
                >
                  <img src={activeCard.img} alt={activeCard.title} />
                </motion.div>
                <motion.div
                  className="card-title"
                  layoutId={`title-${activeCard.title}`}
                >
                  {activeCard.title}
                </motion.div>
                <div className="content-container-text">
                  {activeCard.description}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  padding: 120px 4%;

  @media (max-width: 420px) {
    padding: 60px 4%;
  }

  .section-header {
    width: 80%;
    margin: 0 auto 50px;
    display: flex;
    aign-items: center;
    justify-content: space-between;

    @media (max-width: 1200px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }

    h2 {
      font-size: 36px;
      font-weight: 700;
      color: var(--black);
      margin-bottom: 15px;

      @media (max-width: 420px) {
        font-size: 24px;
      }
    }

    p {
      font-size: 15px;
      line-height: 1.5;
      color: var(--grey-font);
      max-width: 440px;
      width: 100%;

      @media (max-width: 420px) {
        font-size: 14px;
      }
    }
  }
  .card-overlay {
    inset: 0;
    z-index: 1000000;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    will-change: opacity;
    cursor: pointer;
  }
  .card-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 20px;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 100%;
    }

    .card {
      position: relative;
      padding: 0px;
      height: 420px;
      flex: 0 0 40%;
      box-sizing: border-box;
      cursor: pointer;

      @media (max-width: 768px) {
        flex: 0 0 100%;
      }

      @media (max-width: 420px) {
        height: 300px;
      }

      .card-content {
        position: relative;
        border-radius: 20px;
        background: radial-gradient(
          circle at top left,
          #0d1a13 0%,
          #050807 100%
        );

        overflow: hidden;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        transition: transform 0.3s ease;
        &:hover {
          transform: translateY(-5px);
        }
        .card-image-container {
          overflow: hidden;
          height: 420px;
          display: flex;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .title-container {
          position: absolute;
          top: 15px;
          left: 15px;
          color: var(--white);
          span {
            font-size: 12px;
          }
          h3 {
            margin: 8px 0;
            font-size: 22px;
            line-height: 1.2;
          }
        }
      }
    }
    .card:nth-child(4n + 1),
    .card:nth-child(4n + 4) {
      flex: 0 1 calc(60% - 20px);

      @media (max-width: 768px) {
        flex: 0 1 100%;
      }
    }
  }

  .load-more-container {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 48px;

    @media (max-width: 420px) {
      margin-top: 24px;
    }

    button {
      border-radius: 12px;
      font-size: 16px;
      padding: 12px 32px;
      background-color: var(--black);
      font-weight: 500;
      color: var(--white);
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--white);
        color: var(--black);
        border: 1px solid var(--black);
      }
    }
  }
  .card-content-container.open {
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 1000001;
    overflow: hidden;
    padding: 40px 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;

    .open-card-content {
      max-width: 700px;
      border-radius: 20px;
      background: #0b1011;
      margin: auto;
      overflow: hidden;
      position: relative;
      cursor: default;

      @media (max-width: 768px) {
        margin: auto 2%;
      }

      .card-img {
        height: 420px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .card-title {
        top: 30px;
        left: 30px;
        position: absolute;
        color: var(--white);
        font-size: 22px;
        font-weight: 600;
      }
      .content-container-text {
        padding: 35px;
        font-size: 15px;
        line-height: 1.4;
        color: var(--white);
      }
    }
  }
`;

export default Services;
