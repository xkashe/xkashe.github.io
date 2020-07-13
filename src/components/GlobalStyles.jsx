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
    color: #5f5e61;
    background-color: #f1f1f1;
    font-weight: 500;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;
