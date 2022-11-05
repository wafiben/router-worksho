import React from "react";
import { useParams } from "react-router-dom";
import CardProduct from "./cardProduct";

function ProductDetails({ articles, add }) {
  const { id } = useParams();
  const product = articles.find((elt) => elt.id == id);

  return <CardProduct operation={"details"} product={product} add={add}  />;
}

export default ProductDetails;
