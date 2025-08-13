import React from "react";
import styled from "styled-components";
import { ConsultExpert, Footer, Navbar } from "../widgets";

const About = () => {
  return (
    <StyledWrapper>
      <Navbar />

      <main>
        {/* Hero секция с крупным заголовком */}
        <section className="hero">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>

        {/* Первый блок: текст + изображение */}
        <section className="content-block">
          <div className="text">
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              non urna vitae odio efficitur convallis. Donec ut eros quis sapien
              convallis dapibus.
            </p>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Integer dignissim purus nec fermentum
              gravida.
            </p>
          </div>
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              alt="Our Mission"
            />
          </div>
        </section>

        {/* Второй блок: изображение + текст (чередуем) */}
        <section className="content-block reverse">
          <div className="image">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Our Team"
            />
          </div>
          <div className="text">
            <h2>Our Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque suscipit ligula nec turpis convallis, sed tincidunt
              lectus tristique.
            </p>
            <p>
              Morbi in sem euismod, porttitor metus et, lacinia sapien. Duis
              dictum facilisis erat, vitae fermentum nulla dapibus a.
            </p>
          </div>
        </section>

        {/* Третий блок: простой текст, центрированный */}
        <section className="final-block">
          <h2>Why Choose Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            erat volutpat. Mauris vel dui a nulla ultricies fringilla in eget
            risus.
          </p>
        </section>
      </main>

      <ConsultExpert />

      <Footer />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  main {
    max-width: 1200px;
    margin: 6% auto 0;
    padding: 100px 0;
    color: var(--black);
  }

  /* Hero секция */
  .hero {
    text-align: center;
    margin-bottom: 80px;

    h1 {
      font-size: 48px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    p {
      font-size: 18px;
      color: var(--grey-font, #555);
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.6;
    }
  }

  /* Контентные блоки с изображениями и текстом */
  .content-block {
    display: flex;
    align-items: center;
    gap: 60px;
    margin-bottom: 100px;

    .text {
      flex: 1;

      h2 {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 16px;
      }

      p {
        font-size: 16px;
        line-height: 1.7;
        color: var(--grey-font, #555);
        margin-bottom: 16px;
      }
    }

    .image {
      flex: 1;

      img {
        width: 100%;
        height: auto;
        border-radius: 16px;
        object-fit: cover;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
      }
    }
  }

  /* Для второго блока меняем порядок (чтобы изображение слева) */
  .content-block.reverse {
    flex-direction: row-reverse;
  }

  /* Финальный блок с простым текстом */
  .final-block {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;

    h2 {
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 24px;
    }

    p {
      font-size: 18px;
      line-height: 1.7;
      color: var(--grey-font, #555);
    }
  }

  /* Адаптив */
  @media (max-width: 900px) {
    .content-block {
      flex-direction: column;
      gap: 40px;
    }

    .content-block.reverse {
      flex-direction: column;
    }
  }
`;

export default About;
