import React, {useEffect} from 'react';
import styled from 'styled-components';
import {FaChevronLeft, FaChevronRight} from "react-icons/all";

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
  user-select: none;
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

const SideButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1em;
  position: absolute;
  top: 0;
  left: ${({ right }) => !right && 0};
  right: ${({ right }) => right && 0};
  background: linear-gradient(to ${({ right }) => right ? 'left' : 'right'}, #000000bb, transparent);
  cursor: pointer;
  &:hover {
    svg {
      opacity: 1;
    }
  }
  svg {
    transition: opacity 0.2s ease;
    opacity: 0.5;
  }
`;

const Modal = ({ navigate, items, active, isOpen, onClose }) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft') return navigate(-1)
      if (e.key === 'ArrowRight') return navigate(1)
    }
    if (isOpen) window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen, navigate])

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalBackground onClick={onClose}/>
      <div>
        <ModalElement src={items[active]}/>
        <SideButton onClick={() => navigate(-1)}>
          <FaChevronLeft/>
        </SideButton>
        <SideButton right onClick={() => navigate(1)}>
          <FaChevronRight/>
        </SideButton>
      </div>
    </ModalContainer>
  );
};

export default Modal;
