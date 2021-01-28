import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Raleway', sans-serif;
    position: relative;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    text-align: center;
    font-size: 20px;
    color: #f1f1f1;
    background-color: #33333;
    font-weight: 500;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;
