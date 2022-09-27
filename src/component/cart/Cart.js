import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../cart/Cart.css";

import CartService from "../service/CartService";
import Header from "../header/Header";
import { Link } from "react-router-dom";

function AddToCart() {
  const [bagDetails, setBagDetails] = useState([]);

  useEffect(() => {
    fetchCartDetails();
  },[]);

  const fetchCartDetails = () => {
    CartService.getAll(1).then((response) => {
      console.log(response.data.data);
      setBagDetails(response.data.data);
      console.log(bagDetails);
    });
  };

  const updateQuantity = (e, cartId) => {
    let quantity = e.target.value;
    let totalPrice = e.target.value;
    CartService.updateCartQuantity(cartId, quantity, totalPrice).then(
      (response) => {
        console.log(response.data.data);
      }
    );
  };

  const removeItemFromCart = (cartId) => {
    CartService.deleteCartItem(cartId).then((response) => {
      console.log(response.data.data);
    });
  };

  const [qty, setQty] = useState(0);
  const handleDecrement = (cartId,quantity,price)=> {
    console.log(cartId,quantity,price);
    let qty = quantity-1;
    let totalPrice = price*qty;
    console.log(cartId,qty,totalPrice);
    CartService.updateQuantity(cartId,qty,totalPrice).then((response) =>{
      console.log(response.data.data);
      setBagDetails(response.data.data);
      window.location.reload();
    });
  }
  const handleIncrement =(cartId,quantity,price)=> {
    console.log(cartId,quantity,price);
    let qty = quantity+1;
    let totalPrice = price*qty;
    console.log(cartId,qty,totalPrice);
    CartService.updateQuantity(cartId,qty,totalPrice).then((response) =>{
      console.log(response.data.data);
      setBagDetails(response.data.data);
      window.location.reload();
    });
  }

  const emptyCart = () => {
    CartService.emptyCart().then((response) => {
      console.log(response.data.data);
      fetchCartDetails();
     });
  };

  return (
    <div>
      <Header />
      <div className="cart-count_header">
        <span className="cart">My Cart</span>
        <span className="cart-count">
          {" (" + bagDetails.length + " items)"}
        </span>
      </div>

      <div className="cart-container">
        {bagDetails.map((bagItem, i) => {
          return (
            <div key={i}>
              <div className="cart-box">
                <div className="cart-body">
                  <div className="card-image-container">
                    <img
                      className="card-image"
                      src={bagItem.book.profilePic}
                      alt=""
                    />
                  </div>

                  <div className="card-title-author">
                    <h2 className="card-title" >{bagItem.book.bookName}</h2>
                    <span className="card-author">
                      by {bagItem.book.authorName}{" "}
                    </span>
                    <div>
                    <span className="card-price">Price: Rs {bagItem.book.price}</span>
                    </div>
                  </div>
                  <div>
                  <h5>Quantity</h5>
                  <div class="wrapper">
                    {/* <span class="minus" onClick={handleDecrement}>
                      -
                    </span> */}
                    <button class="minus" onClick={ ()=>handleDecrement(bagItem.cartId,bagItem.quantity,bagItem.book.price)}>
                      -
                    </button>
                    <span
                      class="num"
                      id="root"
                      onClick={() => updateQuantity(bagItem.book.quantity)}
                    >
                      {bagItem.quantity}
                    </span>
                    <button class="plus" onClick={ ()=>handleIncrement(bagItem.cartId,bagItem.quantity,bagItem.book.price)}>
                      +
                    </button>
                  </div>
                  <h4>
                    Total Price <br />
                    {bagItem.totalPrice }
                  </h4>
                  </div>

                  {/* <cd bspan className="card-price">Rs {bagItem.book.price}</cd>

                  

                  <div className="cart_quantity">
                    <label htmlFor="#"> QTY: </label>
                    <input
                      className="quantity_text"
                      type="text"
                      defaultValue={bagDetails[i].quantity}
                      onChange={(e) => updateQuantity(e, bagItem.cartId)}
                    />
                  </div> */}

                  <CardActions>
                    <Button
                      variant="contained"
                      onClick={() => removeItemFromCart(bagItem.cartId)}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </div>
              </div>
            </div>
          );
        })}
      </div>



      <div>
      
        <button
          className="emptyCart-button"
          variant="contained"
          size="small"
          onClick={() => emptyCart()} 
        >
          Empty Cart
        </button>
        
        <Link to = '/addressForm'>
        <button className="placeorder-button" variant="contained" size="small">
          Continue
        </button>
        </Link>
      </div>

      <div class="footer">
        <p>Copyright © 2020, Bookstore Private Limited. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default AddToCart;
