import React from "react";
import Card from "react-bootstrap/Card";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import Axios from "../../axiosinstance/axiosinstance";
import { Link } from "react-router-dom";
import { GrClose } from "@react-icons/all-files/gr/GrClose";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { removefromcart } from "../../Store/cartslice";
import { clearthecart } from "../../Store/cartslice";
import { incre } from "../../Store/cartslice";
import { decre } from "../../Store/cartslice";
import AOS from "aos";
import "aos/dist/aos.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart.Cartitem);

  const dispatch = useDispatch();

  const subtotalprice = cart.reduce((acc, product) => {
    const total = acc + product.price * product.cartQuantity;
    return total;
  }, 0);

  const totalprice = cart.reduce((acc, product) => {
    const total = acc + product.price * product.cartQuantity;
    return total;
  }, 30);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="allpage">
        <div data-aos="fade-left" className="cart-Container">
          <div className="thetitle">
            <h2>
              <AiOutlineShoppingCart /> Shopping Cart
            </h2>
            <button
              className="btn btn-danger mx-4 clear"
              onClick={() => dispatch(clearthecart())}>
              Clear Cart
            </button>
          </div>
          {cart.map((product) => {
            return (
              <>
                <div className="cart" key={product.id}>
                  <Card.Img
                    className="img-cart mx-3"
                    style={{ width: "100px", height: "100px" }}
                    variant="top"
                    src={product.image}
                  />
                  <div className="pro-name">{product.title}</div>
                  <div className="Quantity mx-4">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => {
                        dispatch(decre(product));
                      }}>
                      -
                    </button>
                    <h5 className="mx-3">{product.cartQuantity}</h5>
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => {
                        dispatch(incre(product));
                      }}>
                      +
                    </button>
                  </div>
                  <h5 style={{ width: "100px" }}>${product.price}</h5>
                  <button
                    className="btn btn-danger mx-4"
                    onClick={() => dispatch(removefromcart(product))}>
                    Remove
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <div data-aos="fade-right" className="order">
          <div className="summary">
            <h3 className="mx-5">Order Summary</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Coupon</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Coupon" />
            </Form.Group>
            <div className="Row">
              <p>Subtotal</p>
              <div className="total">
                <h5>${subtotalprice.toFixed(2)}</h5>
              </div>
            </div>
            <div className="Row">
              <p>Standard Shipping</p>
              <h6>$30</h6>
            </div>
            <div className="Row">
              <h5>Total</h5>
              <h5>${totalprice.toFixed(2)}</h5>
            </div>
          </div>
          <button className="check btn btn-danger">
            Checkout <h6>${totalprice.toFixed(2)}</h6>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
