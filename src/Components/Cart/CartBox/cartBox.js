import React, { useContext } from "react";
import CartContext from "../../../Contexts/CartContext/context";
import { Address } from "./styles";

export default function CartBox() {
  const { state, totalPrice, dispatch } = useContext(CartContext);

  return (
    <>
      <Address>
        <p>Endereço de entrega</p>
        <b>Rua Antonio Vilela, 22</b>
      </Address>
      <div>
        {state.length === 0 ? (
          <h3>Carrinho vazio</h3>
        ) : (
          state.map((item) => {
            return <li>item</li>;
          })
        )}
        <p>Frete: R$12</p>
        <p>SUBTOTAL</p>
        <p>R$ 500 </p>
      </div>
      <p>Forma de pagamento</p>
      <hr />
      <form action="">
        <input type="radio" name="gender" value="Dinheiro" /> Dinheiro
        <br />
        <input type="radio" name="gender" value="Cartão de crédito" /> Cartão de
        crédito
        <br />
      </form>
      <button>Confirmar</button>
    </>
  );
}
