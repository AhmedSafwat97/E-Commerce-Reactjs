import React from "react";
import Axios from "../../axiosinstance/axiosinstance";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Store/cartslice";
import AOS from "aos";
import { FcNext } from "@react-icons/all-files/fc/FcNext";
import { FcPrevious } from "@react-icons/all-files/fc/FcPrevious";
import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Proslider = () => {
  const [product, setproduct] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    Axios.get("/products?limit=8")
      .then((res) => {
        console.log(res);
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dispatch = useDispatch();
  const left = () => {
    const Slider = document.getElementById("slider");
    Slider.scrollLeft = Slider.scrollLeft + 250;
  };
  const right = () => {
    const Slider = document.getElementById("slider");
    Slider.scrollLeft = Slider.scrollLeft - 250;
  };
  return (
    <Box style={{ width: "75%", position: "relative" }}>
      <div className="buttons">
        <IconButton
          onClick={() => {
            right();
          }}
          sx={{ bgcolor: "lightblue" }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            left();
          }}
          sx={{ bgcolor: "lightblue" }}
        >
          <NavigateNextIcon />
        </IconButton>
      </div>
      <Box className="carts-slider" id="slider">
        <Box className="slider">
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
    </Box>
  );
};

export default Proslider;
