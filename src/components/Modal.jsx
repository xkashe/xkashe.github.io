import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: ${({ isOpen }) => !isOpen && 'none'};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.2s ease;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000c;
`;

const ModalElement = styled.img`
  max-width: 80vw;
  max-height: 80vh;
`;

const Modal = ({ src, isOpen, onClose }) => (
  <ModalContainer isOpen={isOpen}>
    <ModalBackground onClick={onClose} />
    <ModalElement src={src} />
  </ModalContainer>
);

export default Modal;
