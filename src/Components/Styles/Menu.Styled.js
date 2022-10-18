import styled from "styled-components";

const MenuStyled = styled.section`
  width: 80%;
  margin-inline: auto;
  div {
    display: grid;
    grid-template-columns: 70px 1fr 50px;
    grid-template-areas:
      "img title btn"
      "img ingredients btn"
      "img price btn";
    gap: 0 3rem;

    max-width: 540px;
    margin-inline: auto;
    padding-block: 3em;
    border-bottom: 1px solid #d2d2d2;
  }

  img {
    grid-area: img;
  }

  h2 {
    grid-area: title;
  }

  p {
    grid-area: ingredients;
    color: #8b8b8b;
    margin-bottom: 0.25em;
  }

  span {
    grid-area: price;
  }

  button {
    grid-area: btn;
    align-self: center;
    background-color: transparent;
    height: 50px;

    border-radius: 50%;
    border: 1.5px solid #dedede;

    font-size: 3.2rem;
    font-weight: 200;
    font-family: "Inter", sans-serif;
  }

  button:hover {
    background-color: var(--clr-accent);
    color: var(--clr-light);
  }
`;

export { MenuStyled };
