import React from "react";
import { 
  ItemCard,
  ImgMenu,
  BoxDescription,
  QuantityButton,
  GreenText,
  GreySmallText,
  BlackText,
  RemoveButton
} from "./styled";

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
      <ItemCard>
        <ImgMenu src={photoUrl} alt="" />
        <BoxDescription>
          <QuantityButton>{quantity}</QuantityButton>
          <GreenText>{name}</GreenText>
          <GreySmallText id="description">{description}</GreySmallText>
          <BlackText id="price">R$ {price}</BlackText>
          <RemoveButton onClick={() => dispatch({ type: "REMOVE_FROM_CART", id: id })}>
            remover
          </RemoveButton>
        </BoxDescription>
      </ItemCard>
    </>
  );
}
