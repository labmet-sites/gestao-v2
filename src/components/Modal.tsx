// components/Modal.tsx
import React from "react";
import styled, { keyframes } from "styled-components";

type ModalProps = {
  show: boolean;
  message: string;
  onClose: () => void;
  success?: boolean;
};

// Animação suave de entrada
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 80px;
  z-index: 1000;
`;

const ModalContainer = styled.div<{ success?: boolean }>`
  background: white;
  color: ${({ success }) => (success ? "#1fb627" : "#d32f2f")};
  border-top: 6px solid ${({ success }) => (success ? "#1fb627" : "#d32f2f")};
  padding: 1.8rem 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  font-size: 1.15rem;
  max-width: 400px;
  width: 90%;
  position: relative;
  animation: ${fadeIn} 0.4s ease forwards;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 30px;
  font-weight: 800;
  color: #888;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
`;

const Modal: React.FC<ModalProps> = ({ show, message, onClose, success }) => {
  if (!show) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalContainer success={success} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Fechar modal">
          &times;
        </CloseButton>
        {message}
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
