import styled from "styled-components";

const ModalStyled = styled.div`
  display: grid;
  grid-template-rows: 1fr 6fr min-content;
  position: fixed;
  background-color: var(--clr-light);
  max-width: 540px;
  height: 542px;
  margin-inline: auto;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%);
  left: 0.5rem;
  right: 0.5rem;
  font-family: "inter", sans-serif;
  padding: 2.5em;
  border-radius: 4px;
  box-shadow: 5px 5px 255px rgb(0 0 0 / 0.5);

  h2 {
    text-align: center;
    font-weight: 700;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  label {
    margin-bottom: 0.25em;
    font-size: 1.6rem;
    font-weight: 600;
  }

  span {
    font-size: 1.1rem;
    color: red;
    letter-spacing: 0.016em;
  }

  input {
    width: 100%;
    padding: 1em;
    font-size: 2rem;
    color: #757575;
    outline: none;
    margin-bottom: 0.75em;
    border: 1px solid #757575;
    border-radius: 4px;
  }

  input:focus {
    border: 1px solid var(--clr-accent);
  }

  .modalBtn {
    position: absolute;
    top: 0;
    grid-area: btn;
    align-self: center;
    background-color: transparent;
    height: 50px;
    border: none;
    font-size: 3.2rem;
    font-weight: 200;
    font-family: "Inter", sans-serif;
    transform: rotate(45deg);
  }
`;

export { ModalStyled };
