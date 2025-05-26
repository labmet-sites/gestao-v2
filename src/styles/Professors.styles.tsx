import styled from "styled-components";

export const ProfessorsSection = styled.section`
  background: #010b27;
  padding: 5rem 1.5rem;
  font-family: "Inter", sans-serif;
  color: #1e293b;
  box-sizing: border-box;

  .section-title {
    text-align: center;
    font-size: 2.75rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;
  }

  .card {
    border-left: 6px solid #57d8ff;
    background: white;
    border-radius: 12px;
    padding: 1.5rem 1.75rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
    transition: box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }

  .card:hover {
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.07);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 1.3rem;
      font-weight: 600;
      margin: 0;
      color: #1e293b;

      @media (max-width: 480px) {
        font-size: 1.1rem;
      }
    }

    .toggle-icon {
      font-size: 2.5rem;
      font-weight: 800;
      transition: transform 0.3s ease;
      color: #010b27;

      &.rotated {
        transform: rotate(45deg);
      }

      @media (max-width: 480px) {
        font-size: 1.8rem;
      }
    }
  }

  .card-body {
    margin-top: 1rem;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.5s ease, opacity 0.4s ease;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    overflow: auto;

    p {
      font-size: 0.98rem;
      line-height: 1.6;
      color: #334155;

      @media (max-width: 480px) {
        font-size: 0.95rem;
      }
    }

    img {
      width: 28px;
      align-self: flex-end;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .card.open .card-body {
    max-height: 500px;
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.5rem;
  }
`;
