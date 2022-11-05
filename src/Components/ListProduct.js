import React from "react";
import { useState } from "react";
import CardProduct from "./cardProduct";
function ListProduct({ articles, add }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {articles.map((elt) => (
        <CardProduct key={elt.id} product={elt} add={add} />
      ))}
    </div>
  );
}

export default ListProduct;
