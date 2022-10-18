import styled from "styled-components";

const OrderStyled = styled.section`
  width: 80%;
  text-align: center;
  margin: 1.785em auto;

  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1em;
  }

  div:last-of-type {
    padding-top: 1em;
    margin-bottom: 2em;
    border-top: 1px solid #393333;
  }

  h2 {
    margin-bottom: 2em;
  }

  h3 {
    margin-right: 0;
  }

  button {
    margin-right: auto;
    background-color: transparent;
    border: none;
    color: var(--clr-subText);
    font-size: 1.2rem;
  }

  span {
    color: var(--clr-dark);
  }

  .end-message {
    background-color: #ecfdf5;
    color: #065f46;
    padding: 1.5em;
    max-width: 540px;
  }
`;

export { OrderStyled };
