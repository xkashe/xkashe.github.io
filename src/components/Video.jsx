import styled, {keyframes} from "styled-components";
import React from "react";

const spin = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;
const VideoContainer = styled.div`
  min-width: 5em;
  max-width: 20em;
  width: 100%;
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 0 0.5em 1em 0 #0003;
  margin: 1em 0;
  transition: transform 0.2s ease;
  background-color: #0003;
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
  &:hover {
    transform: scale(1.05);
  }
  &::after {
    content: '';
    display: block;
    padding-bottom: calc(900% / 16);
  }
  iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
export const Video = ({ytLink}) => (
  <VideoContainer>
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${ytLink}`}
      title={ytLink}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </VideoContainer>
);
