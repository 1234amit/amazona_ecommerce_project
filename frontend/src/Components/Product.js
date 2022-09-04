import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Rating from "./Rating";
const Product = (props) => {
  const { product } = props;

  return (
    <div>
      <Card className='product'>
        <Link to={`/product/${product.slug}`}>
          <img src={product.image} alt={product.name} />
        </Link>
        <div className='product-info'>
          <Link to={`/product/${product.slug}`}>
            <p>{product.name}</p>
          </Link>

          <Rating rating={product.rating} numReviews={product.numReviews} />

          <p>
            Price:
            <strong> ${product.price}</strong>
          </p>
          <button variant='dark' className='cart_btn'>
            Add To Cart
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Product;
