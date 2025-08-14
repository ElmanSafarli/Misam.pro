import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router";
import { BGCTA } from "../../shared";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ConsultExpert = () => {
  const fullText = "Want to know more about how our technology is helping";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);

  // отслеживаем, когда блок появляется в зоне видимости
  const { ref, inView } = useInView({
    threshold: 0.3, // 30% блока видно — стартуем
    triggerOnce: true, // запустить один раз
  });

  useEffect(() => {
    if (inView) {
      setStart(true);
    }
  }, [inView]);

  useEffect(() => {
    if (start && index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index, start]);

  return (
    <StyledWrapper ref={ref}>
      <section>
        <div className="contact">
          <div className="contact-us">
            <div className="content">
              <div className="main">
                <img className="fill-img" src={BGCTA} alt="contact" />
              </div>
              <div className="info">
                <div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: start ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {displayedText.split(" helping")[0]}
                    <span>
                      {displayedText.includes("helping") ? " helping" : ""}
                    </span>
                  </motion.h3>
                  <Link to="/contact">Book a call</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  .contact-us {
    margin: 130px auto 0;
    width: 80%;

    @media (max-width: 1280px) {
      width: 100%;
      padding: 0 4%;
    }

    @media (max-width: 768px) {
      margin-top: 60px;
    }
  }

  .contact-us .content {
    position: relative;
    height: 538px;
    width: 100%;

    @media (max-width: 768px) {
      height: 400px;
    }
  }

  .contact-us .content .main {
    height: 70%;
    position: absolute;
    left: 0;
    width: 100%;
    border-radius: 40px;
    overflow: hidden;

    @media (max-width: 460px) {
      border-radius: 16px;
    }

    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }

  .contact-us .content .info {
    border-radius: 155px 155px 0 0;
    width: 64%;
    max-width: 744px;
    height: 369px;
    position: absolute;
    bottom: 0;
    background-color: var(--white);
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 768px) {
      width: 80%;
      border-radius: 80px 80px 0 0;
      height: 270px;
    }

    @media (max-width: 460px) {
      width: 90%;
      border-radius: 10px 20px 0 0;
      height: 200px;
    }
  }

  .contact-us .content .info h3 {
    font-weight: 500;
    font-size: 26px;
    color: var(--black);
    max-width: 494px;
    width: 80%;
    margin: 0 auto 40px;
    transition: 0.3s all;

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 460px) {
      font-size: 15px;
    }
  }

  .contact-us .content .info h3 span {
    color: var(--accent);
  }

  .contact-us .content .info a {
    transition: 0.3s all;
    width: 300px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 18px;
    color: var(--white);
    border-radius: 35px;
    background: var(--black);
    margin: auto;
    border: 2px solid var(--black);

    @media (max-width: 460px) {
      width: 80%;
      font-size: 15px;
    }
  }

  .contact-us .content .info a:hover {
    color: var(--black);
    background-color: var(--white);
  }
`;

export default ConsultExpert;
