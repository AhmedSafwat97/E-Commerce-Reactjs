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
import { Box, Button, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

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
      <Box component="main" className="allpage">
        <Box data-aos="fade-left" className="cart-Container">
          <Box className="thetitle">
            <Typography variant="h5">
              <AiOutlineShoppingCart /> Shopping Cart
            </Typography>
            <Button
              className="btn btn-danger mx-4 clear"
              onClick={() => dispatch(clearthecart())}>
              Clear Cart
            </Button>
          </Box>
          {cart.map((product) => {
            return (
              <>
                <Box className="cart" key={product.id}>
                  <img
                    className="img-cart mx-3"
                    style={{ width: "100px", height: "100px" }}
                    variant="top"
                    src={product.image}
                    alt=""
                  />
                  <Box className="pro-name">{product.title}</Box>
                  <Box className="Quantity mx-4">
                    <Button
                      className="btn btn-outline-dark"
                      onClick={() => {
                        dispatch(decre(product));
                      }}>
                      -
                    </Button>
                    <Typography variant="h5" className="mx-3">{product.cartQuantity}</Typography>
                    <Button
                      className="btn btn-outline-dark"
                      onClick={() => {
                        dispatch(incre(product));
                      }}>
                      +
                    </Button>
                  </Box>
                  <Typography variant="h5" style={{ width: "100px" }}>${product.price}</Typography>
                  <Button ariant="outlined" startIcon={<DeleteIcon/>}
                  sx={{bgcolor : "red" , color : "white" }}
                    onClick={() => dispatch(removefromcart(product))}>
                    Remove
                  </Button>
                </Box>
              </>
            );
          })}
        </Box>
        <Box data-aos="fade-right" className="order">
          <Box className="summary">
            <Typography variant="h5" className="mx-5">Order Summary</Typography>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Coupon</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Coupon" />
            </Form.Group>
            <Box className="Row">
              <Typography variant="p">Subtotal</Typography>
              <Box className="total">
                <Typography variant="p">${subtotalprice.toFixed(2)}</Typography>
              </Box>
            </Box>
            <Box className="Row">
              <Typography variant="p">Standard Shipping</Typography>
              <h6>$30</h6>
            </Box>
            <Box className="Row">
              <Typography variant="h5">Total</Typography>
              <Typography variant="h5">${totalprice.toFixed(2)}</Typography>
            </Box>
          </Box>
          <Button sx={{my : "10px"}} variant="contained" color="success" >
            Checkout {totalprice.toFixed(2)}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Cart;
