import React from "react";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Axios from "../../axiosinstance/axiosinstance";
import { addtocart } from "../../Store/cartslice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/Footer";
import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function Women() {

  const [product, setproduct] = useState([]);


  const navigate = useNavigate()

  useEffect(() => {
    Axios.get("/products/category/women's clothing")
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
    <Box>
      <Box className="d-flex justify-content-center mt-3 fw-bold ">
        <Typography variant="h3">Women's Products</Typography>
      </Box>
      <Box sx={{display : "flex" ,justifyContent : "center" , flexWrap : "wrap"}}>
          {product.map((product) => {
            return (
              <Box
                className="the-card"
                sx={{ width: "250px", maxHeight: "400px" }}
                key={product.id}
              >
                <Box
                  onClick={() => {
                    navigate(`/prodetails/${product.id}`);
                  }}
                  sx={{ cursor: "pointer" }}
                >
                  <CardMedia
                    image={`${product.image}`}
                    className="img-card"
                    variant="top"
                    sx={{ height: "250px" }}
                  />
                </Box>
                <Typography variant="h6">{product.category}</Typography>
                <Box sx={{ height: "50px", overflow: "hidden" }}>
                  <Typography variant="p">{product.title}</Typography>
                </Box>
                <div className="to-cart">
                  <h5>${product.price}</h5>

                  <IconButton onClick={() => dispatch(addtocart(product))}>
                    <AddShoppingCartIcon />
                  </IconButton>
                </div>
              </Box>
            );
          })}
        </Box>
    </Box>
  );
 
}

export default Women;






