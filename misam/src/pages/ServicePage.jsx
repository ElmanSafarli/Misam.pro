import React from "react";
import styled from "styled-components";
import { Navbar, Footer, ConsultExpert } from "../widgets";
import { Pagetitle, useLanguage } from "../modules";

const ServicePage = ({ data }) => {
  const { language } = useLanguage();
  return (
    <>
      <Pagetitle
        title={data.title + " | Misam Solutions"}
        description={data.description}
      />
      <Navbar />
      <StyledWrapper>
        <header className="service-header">
          <div className="content">
            <div className="text">
              <h1>{data.title}</h1>
              {data.subtitle && <h2>{data.subtitle}</h2>}
              <p>{data.description}</p>
            </div>
            <div className="image">
              <img src={data.img} alt={data.title} />
            </div>
          </div>
        </header>

        {/* Info Sections */}
        <div className="solution-info">
          {data.whatIs && (
            <section className="what-is card">
              <h2>{data.whatIs.title}</h2>
              <p>{data.whatIs.text}</p>
              <ul>
                {data.whatIs.list?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {data.benefits && (
            <section className="benefits card">
              <h2>
                {language === "en"
                  ? "Benefits of Using"
                  : "İstifadənin Faydaları"}{" "}
                {data.title}
              </h2>
              <ul>
                {data.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </section>
          )}

          {data.whyChoose && (
            <section className="why-choose card">
              <h2>
                {language === "en" ? "Why Choose Our" : "Niyə bizim"}{" "}
                {data.title}{" "}
                {language === "en" ? "Service?" : "xidmətimizi seçməlisiniz?"}{" "}
              </h2>
              <ul>
                {data.whyChoose.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </StyledWrapper>
      <ConsultExpert />
      <Footer />
    </>
  );
};

const StyledWrapper = styled.div`
  /* ===== HEADER ===== */
  .service-header {
    background: linear-gradient(135deg, var(--black), #1c1c1c);
    color: var(--white);
    padding: 180px 6% 120px;

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 60px;
      flex-wrap: wrap;
    }

    .text {
      flex: 1;
      max-width: 600px;
      width: 100%;

      h1 {
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 12px;
        line-height: 1.2;

        @media (max-width: 460px) {
          font-size: 26px;
        }
      }

      h2 {
        font-size: 22px;
        margin-bottom: 24px;
        color: var(--accent);
      }

      p {
        font-size: 18px;
        line-height: 1.6;
        color: var(--grey-font);
        @media (max-width: 460px) {
          font-size: 14px;
        }
      }
    }

    .image img {
      max-width: 480px;
      width: 100%;
      border-radius: 20px;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
      transition: transform 0.4s ease;
    }

    .image img:hover {
      transform: scale(1.05);
    }
  }

  /* ===== CONTENT ===== */
  .solution-info {
    padding: 80px 6%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .card {
    padding: 40px;
    border-radius: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    @media (max-width: 460px) {
      padding: 20px;
    }
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
    background: var(--white);
  }

  h2 {
    font-size: 28px;
    margin-bottom: 20px;
    font-weight: 700;
    color: var(--black);

    @media (max-width: 460px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 17px;
    color: var(--grey-font);
    line-height: 1.7;

    @media (max-width: 460px) {
      font-size: 14px;
    }
  }

  ul {
    margin-top: 20px;
    list-style: none;
    padding-left: 0;

    li {
      position: relative;
      padding-left: 28px;
      margin-bottom: 14px;
      font-size: 16px;
      color: var(--black);
      line-height: 1.6;

      @media (max-width: 460px) {
        font-size: 14px;
      }
    }

    li::before {
      content: "✔";
      position: absolute;
      left: 0;
      color: var(--accent);
      font-weight: bold;
    }
  }
`;

export default ServicePage;
