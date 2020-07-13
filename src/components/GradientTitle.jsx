import styled from 'styled-components';

const GradientTitle = styled.h4`
  display: inline-block;
  text-transform: uppercase;
  color: #fff;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  background-color: #0001;
  background-image: ${({ start, stop }) =>
    `linear-gradient(to right top, ${start}, ${stop})`};
  box-shadow: 0 0.5em 1em 0 #0003;
  margin-bottom: 1em;
  font-size: 1.25em;
`;

export default GradientTitle;
