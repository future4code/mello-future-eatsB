import React from "react";

export default function OrderItem({ place, date, subtotal }) {
  return (
    <>
      <p>{place}</p>
      <p>{date}</p>
      <p>{subtotal}</p>
    </>
  );
}
