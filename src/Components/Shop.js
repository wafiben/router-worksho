import React from "react";
import CardProduct from "./cardProduct";
function Shop({ shop }) {
  return (
    <div>
      {shop.map((elt) => (
        <CardProduct operation={"add"} key={elt.id} product={elt} />
      ))}
    </div>
  );
}

export default Shop;
