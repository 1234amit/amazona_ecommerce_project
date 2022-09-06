import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Rating from "./Rating";
import { Store } from "../Store";
import axios from "axios";
import { Button } from "react-bootstrap";

function Product(props) {
  const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      window.alert("sorry. product is out of the stock");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
  };

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
          {/* <button variant='dark' className='cart_btn'>
            Add To Cart
          </button> */}

          {product.countInStock === 0 ? (
            <Button variant='light' disabled>
              Out of Stock
            </Button>
          ) : (
            <Button onClick={() => addToCartHandler(product)}>
              Add To Cart
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}

export default Product;
