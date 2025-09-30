import React, { useState } from "react";
import styled from "styled-components";
import { faqEn, faqAz } from "../../constants";
import { useLanguage } from "../../modules";

const FaqSection = styled.section`
  .max_width {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 4%;
  }
`;

const FaqsContent = styled.div`
  padding: 110px 0;
`;

const SectionName = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;

  p {
    font-size: 14px;
    font-weight: 500;
    color: var(--black);
  }
`;

const FaqsTitle = styled.h2`
  font-weight: 700;
  font-size: 36px;
  color: var(--black);
  margin-top: 22px;
  margin-bottom: 44px;
  text-align: center;

  @media (max-width: 460px) {
    font-size: 28px;
    margin-top: 8px;
    margin-bottom: 20px;
  }
`;

const FaqsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FaqItem = styled.div`
  padding: 22px 24px;
  background: ${({ $active }) => ($active ? "var(--accent)" : "#f5f5f5")};
  border-radius: 16px;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;

  p {
    color: ${({ $active }) => ($active ? "var(--white)" : "var(--black)")};
  }
`;

const FaqControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  p {
    font-weight: 600;
    font-size: 18px;
    margin: 0;

    @media (max-width: 460px) {
      font-size: 16px;
    }
  }
`;

const FaqArrow = styled.div`
  width: 12px;
  height: 12px;
  border-right: 2px solid
    ${({ $active }) => ($active ? "var(--white)" : "var(--black)")};
  border-bottom: 2px solid
    ${({ $active }) => ($active ? "var(--white)" : "var(--black)")};
  transform: ${({ $active }) => ($active ? "rotate(45deg)" : "rotate(-45deg)")};
  transition: transform 0.3s ease;
`;

const FaqAnswer = styled.div`
  display: ${({ $active }) => ($active ? "block" : "none")};
  margin-top: 20px;

  p {
    font-weight: 500;
    font-size: 12px;
    max-width: 804px;
    width: 100%;
    color: ${({ $active }) => ($active ? "var(--white)" : "var(--black)")};
  }
`;

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { language } = useLanguage();

  const faqs = language === "en" ? faqEn : faqAz;

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FaqSection id="faqs">
      <div className="max_width">
        <FaqsContent>
          <SectionName>
            <div></div>
            <p>
              {language === "en"
                ? "Frequently Asked Questions"
                : "Tez-tez verilən suallar"}
            </p>
          </SectionName>

          <FaqsTitle>
            {language === "en"
              ? "Questions? Look here"
              : "Suallar? Cavablar burada"}
          </FaqsTitle>

          <FaqsWrapper>
            {faqs.map((item, index) => (
              <FaqItem
                key={index}
                $active={activeIndex === index}
                onClick={() => toggleFaq(index)}
              >
                <FaqControl>
                  <p>{item.question}</p>
                  <FaqArrow $active={activeIndex === index} />
                </FaqControl>
                <FaqAnswer $active={activeIndex === index}>
                  <p>{item.answer}</p>
                </FaqAnswer>
              </FaqItem>
            ))}
          </FaqsWrapper>
        </FaqsContent>
      </div>
    </FaqSection>
  );
};

export default Faq;
