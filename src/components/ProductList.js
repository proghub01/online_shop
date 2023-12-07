import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';
import "../styles/productList.css";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className='productList'>
      <h2 id='title'>Apple Devices</h2>
      <ul className='products'>
        {products.map(product => (
          <div key={product.name} className='product'>
            <img src={product.img} alt={product.name} />
              <div className='productDetails'>
                <h3>{product.name}</h3>
                <p id='productPrice'>Price: {product.price} $</p>
                <button id='buyBtn' onClick={() => addToCart(product)}>Buy</button>
              </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  addToCart: product => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
