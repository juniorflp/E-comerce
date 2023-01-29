import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    font-family: Montserrat, Arial, sans-serif;
    background-color: #ffff;
  }
 
`;

export default GlobalStyle;
