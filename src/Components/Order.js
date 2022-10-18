// Hooks
import React, { useContext } from "react";
// Context
import { Context } from "../Context";
// Styles
import { OrderStyled } from "./Styles/Order.Styled";

function Order() {
  const {
    itemsOrdered,
    removeFromOrder,
    price,
    completeTransaction,
    isOrderCompleted,
    formData,
  } = useContext(Context);

  const renderOrderedItems = itemsOrdered.map(
    item =>
      item.quantity > 0 && (
        <div key={item.id}>
          <h3>
            <span>{item.quantity}x -</span> {item.title}
          </h3>
          <button onClick={() => removeFromOrder(item)}>remove</button>
          <span>${item.price * item.quantity}</span>
        </div>
      )
  );

  return (
    <OrderStyled>
      {!isOrderCompleted ? (
        <>
          <h2>Your order</h2>
          {renderOrderedItems}
          <div>
            <h3>Total Price:</h3>
            <span>${price}</span>
          </div>
          <button className="btn" onClick={completeTransaction}>
            Complete Order
          </button>
        </>
      ) : (
        <h2 className="end-message">
          Thanks, {formData.name}! Your order is on its way!
        </h2>
      )}
    </OrderStyled>
  );
}

export default Order;
