import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ProgressiveImage from 'react-progressive-image';
import Section from 'components/Section';
import GradientTitle from 'components/GradientTitle';
import ItemGrid from 'components/ItemGrid';
import Modal from 'components/Modal';

import st from 'res/edit/st.jpg';
import portal from 'res/edit/portal.jpg';
import joker from 'res/edit/joker.jpg';
import dark from 'res/edit/dark.jpg';
import joker2 from 'res/edit/joker2.jpg';
import rzepiara from 'res/edit/rzepiara.jpg';

const spin = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const ImageContainer = styled.div`
  min-width: 5em;
  max-width: 20em;
  max-height: 25em;
  width: 100%;
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 0 0.5em 1em 0 #0003;
  margin: 1em 0.5em;
  background-color: #0003;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &::before {
    content: '';
    width: 1em;
    height: 1em;
    position: absolute;
    left: 50%;
    top: 50%;
    animation: ${spin} 1s linear infinite both;
    border: 0.25em solid #fff8;
    border-radius: 50%;
    border-top-color: transparent;
  }

  &::after {
    content: '';
    display: block;
    padding-bottom: 50%;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

const LazyImage = ({ src, alt, onClick }) => (
  <ProgressiveImage src={src}>
    {(src, loading) => (
      <ImageContainer loading={loading} onClick={onClick}>
        <img src={src} alt={alt} />
      </ImageContainer>
    )}
  </ProgressiveImage>
);

const IMAGES = [st, portal, dark, joker, joker2, rzepiara];

const Edits = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(0);
  const handleImageClick = (index) => {
    setCurrentModal(index);
    setOpen(true);
  };

  return (
    <Section>
      <GradientTitle start="#fd5392" stop="#f86f64">
        Edycja zdjęć
      </GradientTitle>
      <ItemGrid>
        {IMAGES.map((src, i) => (
          <LazyImage key={src} src={src} onClick={() => handleImageClick(i)} />
        ))}
      </ItemGrid>
      <Modal
        src={IMAGES[currentModal]}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </Section>
  );
};

export default Edits;
