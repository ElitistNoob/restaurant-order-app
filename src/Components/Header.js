// Hooks
import React from "react";
// Styles
import { HeaderStyled } from "./Styles/Header.Styled";

function Header() {
  return (
    <HeaderStyled>
      <h1 className="header__title">Kevin's Diner</h1>
      <p className="header__subtitle">
        Commander Shepard's favorite diner on the citadel
      </p>
    </HeaderStyled>
  );
}

export default Header;
