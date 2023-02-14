import React from "react";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Axios from "../../axiosinstance/axiosinstance";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AiTwotoneStar } from "@react-icons/all-files/ai/AiTwotoneStar";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Store/cartslice";
import Footer from "../footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Proslider from "./Proslider";
import { Box, Button, IconButton, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Prodetails(props) {
  const location = useLocation();
  console.log(location);
  const params = useParams();
  console.log(params);
  const [product, setproduct] = useState([]);
  useEffect(() => {
    Axios.get(`/products/${params.id}`)
      .then((res) => {
        console.log(res);
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <>
      <Box component="main" style={{ display: "block" }}>
        <Box className="cartpage">
          <Box data-aos="fade-left" className="all-d">
            <Box className="d-pro">
              <Box className="img-d">
                <Card.Img
                  className="d-card"
                  variant="top"
                  src={product.image}
                  style={{ width: "20rem", hight: "20rem" }}
                />
              </Box>
              <Box className="contnt-d">
                <Typography variant="h5">{product.category}</Typography>
                <Box className="d-cardText">
                  <Typography variant="h4">{product.title}</Typography>
                  <Box className="rate">
                    <Typography variant="h4">4.5</Typography>
                    <AiTwotoneStar
                      style={{ color: "yellow", fontSize: "20px" }}
                    />
                    <Typography variant="h5" className="mx-3">
                      200
                    </Typography>
                  </Box>
                  <Typography variant="h5">${product.price}</Typography>
                  <Typography variant="p" style={{ width: "80%" }}>
                    {product.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="d-to-cart" data-aos="fade-right">
            <Typography variant="h5">
              Price : <Typography variant="h5">${product.price}</Typography>
            </Typography>
            <Typography variant="p">
              Delivery December 8 - 25 Or fastest delivery Friday, December 16.
              Order within 6 hrs 45 mins
            </Typography>
            <IconButton
              className="btn btn-success"
              onClick={() => dispatch(addtocart(product))}
            >
              <AddShoppingCartIcon />
            </IconButton>
            <Typography variant="p" className="my-3">
              Return policy: Returnable until Jan 31, 2023 Add a gift receipt
              for easy returns
            </Typography>
          </Box>
        </Box>
        <Box
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2">Similar Products</Typography>
          <Proslider />
        </Box>
      </Box>
    </>
  );
}

export default Prodetails;
