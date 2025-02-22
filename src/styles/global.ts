import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    background-color: ${(props) => props.theme.colors.background};
    transition: background-color 1000ms;
    font-size: 14px;
    color: #${(props) => props.theme.colors.text};
    font-family: sans-serif;
  }
`;
