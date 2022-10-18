// Hooks
import React, { useState, useContext } from "react";
// Context
import { Context } from "../Context";
// Styles
import { ModalStyled } from "./Styles/Modal.Styled";
import MoonLoader from "react-spinners/MoonLoader";

function Modal() {
  const {
    setItemsOrdered,
    setPrice,
    setIsModalOpen,
    setIsOrderCompleted,
    formData,
    setFormData,
  } = useContext(Context);

  const [isLoading, setIsLoading] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState("");

  const cardFormat = formData.card.slice(0, 16);
  const cvvFormat = formData.cvv.slice(0, 3);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    paymentProcedure();
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(false);
      setIsOrderCompleted(true);
    }, 5000);
    setTimeout(() => {
      setIsOrderCompleted(false);
      setItemsOrdered([]);
      setPrice(0);
    }, 9500);
  }

  const override = {
    marginInline: "auto",
    marginTop: "40%",
    marginBottom: "2em",
  };

  function paymentProcedure() {
    setPaymentMessage("Checking Credentials...");
    setTimeout(() => {
      setPaymentMessage("Processing Payment...");
    }, 1500);
    setTimeout(() => {
      setPaymentMessage("Payment Completed");
    }, 3500);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return isLoading ? (
    <ModalStyled>
      <button className={"modalBtn"} onClick={closeModal}>
        +
      </button>
      <MoonLoader
        cssOverride={override}
        color={"var(--clr-accent)"}
        loading={isLoading}
        size={70}
      />
      <h2>{paymentMessage}</h2>
    </ModalStyled>
  ) : (
    <ModalStyled>
      <button className={"modalBtn"} onClick={closeModal}>
        +
      </button>
      <h2>Enter card details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name on card <span>*Required</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            onChange={handleChange}
            value={formData.name}
            required
          ></input>
          <label htmlFor="card">
            Card Number <span>*Required</span>
          </label>
          <input
            type="number"
            name="card"
            id="card"
            value={cardFormat}
            placeholder="xxxx xxxx xxxx xxxx"
            onChange={handleChange}
            required
          ></input>
          <label htmlFor="CVV">
            CVV <span>*Required</span>
          </label>
          <input
            type="number"
            name="cvv"
            id="cvv"
            value={cvvFormat}
            placeholder="CVV"
            onChange={handleChange}
            required
          ></input>
        </div>
        <button className="btn">Pay</button>
      </form>
    </ModalStyled>
  );
}

export default Modal;
