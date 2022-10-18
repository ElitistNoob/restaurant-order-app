// Hooks
import React, { useContext } from "react";
// Context
import { Context } from "../Context";
// Data
import menuData from "../menuData";
// Styles
import { MenuStyled } from "./Styles/Menu.Styled";

function Menu() {
  const { addToOrder } = useContext(Context);

  const menu = menuData.map(item => (
    <div key={item.id}>
      <img src={item.image} alt={item.title}></img>
      <h3>{item.title}</h3>
      <p>{item.ingredients.join(", ")}</p>
      <span>${item.price}</span>
      <button onClick={() => addToOrder(item)}>+</button>
    </div>
  ));
  return <MenuStyled>{menu}</MenuStyled>;
}

export default Menu;
