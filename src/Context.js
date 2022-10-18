import { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [itemsOrdered, setItemsOrdered] = useState([]);
  const [price, setPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);

  function addToOrder(item) {
    const checkDoubles = itemsOrdered.some(listItem => listItem === item);
    if (!checkDoubles) {
      setItemsOrdered(prevItemsOrdered => [...prevItemsOrdered, item]);
    }
    item.quantity = item.quantity + 1;
    setPrice(prevPrice => prevPrice + item.price);
  }

  function removeFromOrder(item) {
    const checkDoubles = itemsOrdered.some(listItem => listItem === item);
    if (!checkDoubles) {
      setItemsOrdered(itemsOrdered.filter(prevItem => prevItem.id !== item.id));
    }
    item.quantity = item.quantity - 1;
    setPrice(prevPrice => prevPrice - item.price);
  }

  function completeTransaction() {
    itemsOrdered.length > 0
      ? setIsModalOpen(true)
      : alert("Your order is empty, please make a selection.");
  }

  return (
    <Context.Provider
      value={{
        itemsOrdered,
        setItemsOrdered,
        addToOrder,
        removeFromOrder,
        price,
        setPrice,
        completeTransaction,
        isModalOpen,
        setIsModalOpen,
        isOrderCompleted,
        setIsOrderCompleted,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
