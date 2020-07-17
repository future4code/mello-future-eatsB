import React from "react";
import { Container } from "./styles";

export default function CartItem({
  id,
  name,
  description,
  price,
  quantity,
  photoUrl,
  dispatch,
}) {
  return (
    <>
      <Container>
        <div>
          <img src={photoUrl} alt="" />
        </div>
        <h3>{name}</h3>
        <p id="description">{description}</p>
        <span>{quantity}</span>
        <p id="price">R$ {price}</p>
        <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", id: id })}>
          remover
        </button>
      </Container>
    </>
  );
}
