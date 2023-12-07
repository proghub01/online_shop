// Cart.js
import React from "react";
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import "../styles/cart.css";

const Cart = ({ cart, removeFromCart }) => {

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleDelete = (productName) => {
    removeFromCart(productName);
  };

  return (
    <div className="cart">
      <h1 id="cartTitle">Cart</h1>
      <ul>
        {cart.map(item => (
          <div key={item.name} className="cartItem">
            <img src={item.img} alt={item.name} />
            <div className="cartItemDetails">
              <h2>{item.name}</h2>
              <h3>Price: {item.price} $</h3>
              <h3>Amount: {item.quantity}</h3>
              <button id="deleteBtn" onClick={() => handleDelete(item.name)}>Delete</button>
            </div>
          </div>
        ))}
      </ul>
      <h3 id="totalPrice">Total Price: {calculateTotal()} $</h3>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: productName => dispatch(removeFromCart(productName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
