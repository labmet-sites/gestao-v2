import styled from "styled-components";

export const EstruturaSection = styled.section`
  background: linear-gradient(to bottom, #00388d, #000730);
  padding: 4rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  position: relative;
  box-sizing: border-box;
  padding-top: 180px;

  .estrutura-title {
    text-align: center;
    font-size: 2.75rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 3rem;
    position: absolute;
    top: 80px;
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

  .card {
    border-left: 3px solid #e0e0e0;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    cursor: pointer;
    background: #f9f9f9;
    transition: background 0.3s;
  }

  .card:hover {
    background: #f1f1f1;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .discipline {
    font-size: 1rem;
    font-weight: 600;
    color: #2a2a2a;
    margin: 0;
  }

  .toggle-icon {
    font-size: 24px;
    font-weight: bold;
    color: #00388d;
    transition: transform 0.3s ease;
  }

  .toggle-icon.rotated {
    transform: rotate(45deg);
  }

  .card-body {
    margin-top: 0.75rem;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.4s ease, opacity 0.3s ease;
  }

  .card.open .card-body {
    max-height: 300px;
    opacity: 1;
  }

  .card-body p {
    font-size: 0.95rem;
    color: #444;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    .level-title {
      font-size: 1.2rem;
    }
    .discipline {
      font-size: 0.95rem;
    }
    .toggle-icon {
      font-size: 20px;
    }
  }
`;
