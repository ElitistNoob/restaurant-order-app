import { nanoid } from "nanoid";

const menuData = [
  {
    id: nanoid(),
    image: require("./Components/assets/pizza.png"),
    title: "Pizza",
    ingredients: ["pepperoni", "mushroom", "mozarella"],
    price: 14,
    quantity: 0,
  },
  {
    id: nanoid(),
    image: require("./Components/assets/burger.png"),
    title: "Hamburger",
    ingredients: ["beef", "cheese", "lettuce"],
    price: 12,
    quantity: 0,
  },
  {
    id: nanoid(),
    image: require("./Components/assets/beer.png"),
    title: "Beer",
    ingredients: ["grain", "hops", "yeast", "water"],
    price: 12,
    quantity: 0,
  },
];

export default menuData;
