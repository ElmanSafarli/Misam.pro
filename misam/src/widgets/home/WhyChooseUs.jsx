import React from "react";
import { ShieldCheck, Globe, Clock, BarChart3 } from "lucide-react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck size={40} strokeWidth={1.5} />,
      title: "Reliable & Secure",
      description: "Enterprise-grade security and uptime you can count on.",
    },
    {
      icon: <Globe size={40} strokeWidth={1.5} />,
      title: "Global Coverage",
      description: "Reach customers in over 190 countries worldwide.",
    },
    {
      icon: <Clock size={40} strokeWidth={1.5} />,
      title: "24/7 Support",
      description: "Our team is here for you anytime, anywhere.",
    },
    {
      icon: <BarChart3 size={40} strokeWidth={1.5} />,
      title: "Scalable Solutions",
      description:
        "Easily grow your messaging capacity as your business expands.",
    },
  ];

  // Intersection Observer hook
  const [ref, inView] = useInView({
    triggerOnce: true, // анимация сработает только один раз
    threshold: 0.2, // блок считается видимым, когда 20% его видимы
  });

  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Section ref={ref}>
      <Container>
        <h2>Why choose us</h2>
        <p className="subtitle">
          Discover the key benefits that make our platform the trusted choice
          for businesses.
        </p>
        <Cards
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"} // анимация запускается только при inView
        >
          {features.map((feature, index) => (
            <Card key={index} as={motion.div} variants={cardVariants}>
              <IconWrapper>{feature.icon}</IconWrapper>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Card>
          ))}
        </Cards>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;

// Стили оставляем как есть
const Section = styled.section`
  padding: 120px 4%;
  background: #0d0d0d;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 36px;
    font-weight: 600;
    color: white;
    margin-bottom: 10px;

    @media (max-width: 460px) {
      font-size: 28px;
    }
  }

  .subtitle {
    font-size: 16px;
    color: var(--grey-font);
    max-width: 600px;
    margin: 0 auto 50px;

    @media (max-width: 460px) {
      font-size: 14px;
    }
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
`;

const Card = styled.div`
  background: #1a1a1a;
  border-radius: 16px;
  padding: 30px 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  text-align: center;

  h3 {
    font-size: 20px;
    margin-top: 15px;
    color: white;
  }

  p {
    font-size: 14px;
    color: var(--grey-font);
    margin-top: 8px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 184, 148, 0.15);
  color: #00b894;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto;
`;
