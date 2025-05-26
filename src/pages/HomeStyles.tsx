import styled from "styled-components";
import bgImage from "../assets/gestaodeativos.jpg";

const headerHeight = "58px";

export const HomeStyles = styled.section`
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: max-content;

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${headerHeight};
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 0 40px;

    .header-logo {
      width: 48px;
      margin-right: 60px;
      height: auto;
    }

    .header-options {
      display: flex;
      gap: 30px;
      list-style: none;
      margin: 0;
      padding: 0;

      .option {
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        font-size: 16px;
        color: #333;
        cursor: pointer;
        position: relative;
        padding: 6px 0;
        transition: color 0.3s ease;

        &::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #5799d3;
          transition: width 0.3s ease;
        }

        &:hover {
          color: #5799d3;

          &::after {
            width: 100%;
          }
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
      padding: 10px 20px;

      .header-options {
        flex-wrap: wrap;
        justify-content: center;
        gap: 16px;

        .option {
          font-size: 12px;
        }
      }

      .header-logo {
        display: none;
      }
    }
  }

  .home-container {
    width: 100%;
    height: 100vh;
    padding-top: ${headerHeight};
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),
      url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    box-sizing: border-box;

    .home-content {
      text-align: center;
      color: #fff;
      max-width: 800px;
      padding: 0 20px;
      animation: fadeIn 1s ease-in-out;

      .ufcg-img {
        width: 280px;
        margin-bottom: 20px;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4));
      }

      .main-title {
        font-size: 3rem;
        font-weight: 800;
        margin-bottom: 20px;
        line-height: 1.2;
        font-family: "Montserrat", sans-serif;
      }

      .sub-title {
        font-size: 1.25rem;
        font-weight: 400;
        margin-bottom: 20px;
        color: #e0e0e0;
        font-family: "Montserrat", sans-serif;
      }

      .badge {
        display: inline-block;
        background-color: #5799d3;
        color: white;
        padding: 10px 20px;
        font-size: 1rem;
        border-radius: 30px;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }

      @media (max-width: 768px) {
        .main-title {
          font-size: 2.2rem;
        }

        .sub-title {
          font-size: 1rem;
        }

        .badge {
          font-size: 0.9rem;
          padding: 8px 16px;
        }

        .ufcg-img {
          width: 200px;
        }
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  section {
    width: 100%;
    height: max-content;
  }

  .sec-sobre {
    background-color: #fefefe;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 80px 10px;
    box-sizing: border-box;

    .sobre-wrapper {
      display: flex;
      gap: 60px;
      max-width: 95%;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 992px) {
        flex-direction: column;
        text-align: center;
      }
    }

    .left-content {
      flex: 1;

      .title {
        font-size: 28px;
        font-weight: 700;
        font-family: "Montserrat", sans-serif;
        color: #1f2937;
        margin-bottom: 30px;
      }

      .about-text {
        font-size: 17px;
        line-height: 1.8;
        color: #4b5563;
        font-family: "Montserrat", sans-serif;
        margin-bottom: 20px;
        text-align: justify;
      }
    }

    .right-content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      .vector {
        width: 100%;
        max-width: 600px;
        height: auto;
      }
    }

    @media (max-width: 1500px) {
      .sobre-wrapper {
        align-items: center;
        justify-content: center;

        .left-content {
          .title {
            font-size: 22px;
            margin-bottom: 10px;
          }

          .about-text {
            font-size: 14px;
            margin-bottom: 10px;
          }
        }
      }
    }

    @media (max-width: 1500px) {
      .sobre-wrapper {
        align-items: center;
        justify-content: center;

        .vector {
          max-width: 400px;
        }
        .left-content {
          .title {
            font-size: 22px;
            margin-bottom: 10px;
          }

          .about-text {
            font-size: 14px;
            margin-bottom: 10px;
          }
        }
      }
    }
  }

  .sec-interesse {
    background-color: bisque;
  }

  .sec-contato {
    background-color: blanchedalmond;
  }

  footer {
    width: 100%;
    background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
    padding: 3rem 1rem;
    display: flex;
    justify-content: center;
    border-top: 1px solid #cbd5e1;
    box-sizing: border-box;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    max-width: 600px;
  }

  .footer-content img {
    width: 100px;
    height: auto;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08));
    transition: transform 0.3s ease;
  }

  .footer-content img:hover {
    transform: scale(1.05);
  }

  .footer-content p {
    font-family: "Inter", sans-serif;
    font-size: 1.125rem;
    font-weight: 500;
    color: #1e293b;
    margin: 0;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .footer-content img {
      width: 80px;
    }

    .footer-content p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    footer {
      padding: 2rem 0.5rem;
    }

    .footer-content img {
      width: 65px;
    }

    .footer-content p {
      font-size: 0.9rem;
    }
  }

  .whatsapp-float {
    position: fixed;
    width: 56px;
    height: 56px;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    transition: transform 0.2s;
  }

  .whatsapp-float:hover {
    transform: scale(1.1);
  }

  .whatsapp-float img {
    width: 28px;
    height: 28px;
    filter: brightness(0) invert(1); /* Ícone branco */
  }

  .whatsapp-float {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 56px;
    height: 56px;
    background-color: #25d366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    transition: transform 0.2s ease;
  }

  .whatsapp-float:hover {
    transform: scale(1.1);
  }

  .sec-estrutura {
    padding: 4rem 2rem;
    background: linear-gradient(to bottom, #00388d, #000730);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }

  .disciplines {
    background-color: #ffffff;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.07);
    flex: 1 1 300px;
    max-width: 400px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .disciplines:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }

  .level-title {
    font-size: 1.5rem;
    color: #2a2a2a;
    margin-bottom: 1.2rem;
    border-left: 6px solid #25d366;
    padding-left: 0.75rem;
  }

  .discipline {
    font-size: 1rem;
    color: #444;
    margin-bottom: 0.75rem;
    padding-left: 0.5rem;
    border-left: 3px solid #e0e0e0;
    transition: color 0.3s ease;
  }

  .discipline:hover {
    color: #25d366;
  }
`;
