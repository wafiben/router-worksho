import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function CardProduct({ product, operation, add }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${product.id}`);
    if (operation === "details") {
      add(product.id);
    }
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Title>
          {operation === "details" ||
            (operation === "add" && `${product.price} $`)}
        </Card.Title>
        {operation === "add" ? (
          <Button variant="danger" onClick={handleClick}>
            delete
          </Button>
        ) : (
          <Button variant="primary" onClick={handleClick}>
            {operation === "details" ? "Add to cart" : "See details"}{" "}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardProduct;
