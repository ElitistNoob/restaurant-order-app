import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-size: 62.5%;
    background-color: #F5F5F5;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Smythe', cursive;
    background-color: #fff;
    margin: 0;
    padding: 0;
    max-width: 600px;
    width: 100%;
  }

  :root {
    --clr-light: #fff;
    --clr-dark: #000;
    --clr-subText: #8B8B8B;
    --clr-accent: #16DB99;
  }

  /* Typography */

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  h1 {
    font-size: 3.9rem;
  }

  h2,
  h3,
  p,
  span {
    color: var(--clr-dark);
  }

  h2,
  h3 {
    font-size: 2.8rem;
  }

  p {
    font-size: 1.6rem;
  }

  span {
    font-size: 2rem;
  }

  /* Button */

  button {
    cursor: pointer;
  }

  .btn {
    background-color: var(--clr-accent)!important;
    width: 100%;
    color: var(--clr-light)!important;
    padding: 1.2em;
    border-radius: 3px;
    font-size: 1.6rem;
    font-weight: 700;
    border: none;
  }

  /* Input type number - hides arrow selectors */

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

`;

export default GlobalStyle;
