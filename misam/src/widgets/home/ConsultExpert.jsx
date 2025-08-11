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
    padding: 0 4%;
    margin-top: 130px;
  }

  .contact-us .content {
    position: relative;
    height: 538px;
    width: 100%;
  }

  .contact-us .content .main {
    height: 70%;
    position: absolute;
    left: 0;
    width: 100%;
    border-radius: 40px;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
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
  }

  .contact-us .content .info h3 {
    font-weight: 500;
    font-size: 26px;
    color: var(--black);
    max-width: 494px;
    width: 80%;
    margin: 0 auto 40px;
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
  }

  .contact-us .content .info a:hover {
    color: var(--black);
    background-color: var(--white);
  }
`;

export default ConsultExpert;
