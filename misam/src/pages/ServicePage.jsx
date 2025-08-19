import React from "react";
import styled from "styled-components";
import { Navbar, Footer, ConsultExpert } from "../widgets";

const ServicePage = ({ data }) => {
  console.log(data);
  return (
    <>
      {" "}
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

        {data.whatIs && (
          <section className="what-is">
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
          <section className="benefits">
            <h2>Benefits of Using {data.title}</h2>
            <ul>
              {data.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </section>
        )}

        {data.whyChoose && (
          <section className="why-choose">
            <h2>Why Choose Our {data.title} Service?</h2>
            <ul>
              {data.whyChoose.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </section>
        )}
      </StyledWrapper>
      <ConsultExpert />
      <Footer />
    </>
  );
};

const StyledWrapper = styled.div`
  .service-header {
    background: var(--black);
    color: var(--white);
    padding: 150px 4% 100px;

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;

      .text {
        max-width: 600px;

        h1 {
          font-size: 36px;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;

          .icon {
            width: 40px;
            height: 40px;
          }
        }

        h2 {
          font-size: 22px;
          margin-bottom: 20px;
          color: var(--accent);
        }

        p {
          font-size: 18px;
          color: var(--grey-font);
        }
      }

      .image img {
        max-width: 500px;
        width: 100%;
        border-radius: 16px;
      }
    }
  }

  h2 {
    font-size: 26px;
    margin-bottom: 20px;
    font-weight: 600;
  }

  p {
    font-size: 16px;
    color: var(--black);
  }

  ul {
    margin-top: 15px;
    list-style: disc inside;

    li {
      margin-bottom: 10px;
      font-size: 16px;
      color: var(--grey-font);
    }
  }
`;

export default ServicePage;
