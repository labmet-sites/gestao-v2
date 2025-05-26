import styled from "styled-components";

export const Section = styled.section`
  background: linear-gradient(to bottom, #00388d, #000730);
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 900px;
  width: 100%;
  background: #ffffff;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  gap: 2rem;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
    margin: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    margin: 0 0.5rem;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex: 1;
`;

export const Unidade = styled.div`
  font-size: 1.05rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #334155;
`;

export const Value = styled.span`
  font-size: 0.95rem;
  color: #1e293b;

  a {
    color: #0ea5e9;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Logo = styled.img`
  width: 80px;
  height: auto;
  object-fit: contain;
  position: absolute;
  bottom: 20px;
  right: 20px;

  @media (max-width: 768px) {
    width: 60px;
  }

  @media (max-width: 480px) {
    width: 32px;
  }
`;
