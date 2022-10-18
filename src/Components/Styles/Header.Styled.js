import styled from "styled-components";

import img from "../assets/ferks-guare-KEZdWfYD-ow-unsplash.jpg";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${img});
  background-size: cover;
  max-width: 600px;
  width: 100%;
  padding: 3.128em 3em;
  color: var(--clr-light);

  h1 {
    line-height: 1.6;
  }

  p {
    color: var(--clr-light);
    font-size: 2.2rem;
    max-width: 275px;
  }
`;

export { HeaderStyled };
