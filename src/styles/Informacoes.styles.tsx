import styled from "styled-components";

export const Section = styled.section`
  background: linear-gradient(to bottom, #00388d, #010b27);
  padding: 4rem 1rem;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow-x: hidden;

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-sizing: border-box;
`;

export const InfoItem = styled.li`
  font-size: 1.125rem;
  color: #1e293b;
  line-height: 1.6;
  background: #ffffff;
  padding: 1.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  word-wrap: break-word;
  overflow-wrap: break-word;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1.25rem 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 1rem;
  }
`;

export const Highlight = styled.span`
  font-weight: 600;
  color: #16a34a;
`;
