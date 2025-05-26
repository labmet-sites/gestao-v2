import styled from "styled-components";

export const Section = styled.section`
  background: linear-gradient(to right, #ffffff, #ecf4ff);
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 2.5rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  background: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 480px) {
    padding: 2rem 1.2rem;
    border-radius: 16px;
    gap: 1.2rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.95rem;
  color: #475569;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const Input = styled.input`
  padding: 0.85rem 1rem;
  border: 2px solid #cbd5e1;
  border-radius: 12px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #22c55e;
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
    outline: none;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0.75rem 0.9rem;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.85rem 1rem;
  border: 2px solid #cbd5e1;
  border-radius: 12px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #22c55e;
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
    outline: none;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0.75rem 0.9rem;
  }
`;

export const Button = styled.button`
  align-self: flex-end;
  background: linear-gradient(to right, #22c55e, #16a34a);
  color: white;
  font-weight: 600;
  padding: 0.9rem 2rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: linear-gradient(to right, #16a34a, #15803d);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: 100%;
    align-self: stretch;
    font-size: 0.95rem;
    padding: 0.85rem;
  }
`;
