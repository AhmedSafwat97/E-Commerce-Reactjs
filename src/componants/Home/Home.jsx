import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import Proslider from "../products/Proslider";
import "aos/dist/aos.css";
import { Box, Button, CardMedia, Typography } from "@mui/material";
import "./Home.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function Home() {
  const Categories = [
    { Title: "Electronice", img: "./imgs/elect.jpg", Link: "" },
    { Title: "Women's", img: "./imgs/women.jpg", Link: "" },
    { Title: "Men's", img: "./imgs/men.jpg", Link: "" },
    { Title: "Jewelery", img: "./imgs/j.jpg", Link: "" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <Box>
      <CardMedia
        image="../../../imgs/Bg-home.jpg"
        sx={{
          display: { xs: "none", md: "block" },
          width: "90%",
          height: "500px",
          position: "relative",
          top: "25px",
          left: "5%",
        }}
        className="img-Card"
      >
        <Box sx={{ position: "absolute", top: "150px", left: "150px" }}>
          <Typography variant="h5">House Shop Offers</Typography>
          <Typography variant="h2">Super Value Deals</Typography>
          <Typography variant="h4">On All Products</Typography>
          <Typography variant="h6">Check Out All The Trends</Typography>
          <Button
            onClick={() => {
              navigate("/allpro");
            }}
            variant="contained"
            color="success"
          >
            Shop Now
          </Button>
        </Box>
      </CardMedia>

      <Box className="c-text">
        <Typography variant="h3">Categories</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {Categories.map((item) => {
          return (
            <Box
              key={item.Title}
              sx={{ bgcolor: "white", width: "300px", m: "10px" }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={`${item.img}`}
                title={`${item.Title}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.Title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  See More
                </Button>
              </CardActions>
            </Box>
          );
        })}
      </Box>

      <Box className="categories">
        <CardMedia
          image="./imgs/cart.jpg"
          sx={{
            display: { xs: "none", md: "block" },
            width: "80%",
            height: "250px",
            position: "relative",
          }}
          className="img-Card"
        >
          <Box sx={{ position: "absolute", top: "70px", left: "50px" }}>
            <Typography variant="h4"> Offers</Typography>
            <Typography variant="h6"> Buy Now And Save 50%</Typography>

            <Button
              onClick={() => {
                navigate("/allpro");
              }}
              variant="contained"
              color="success"
            >
              Shop Now
            </Button>
          </Box>
        </CardMedia>

        <Typography variant="h4" className="d-flex justify-content-center mt-3 fw-bold ">
          <Typography variant="h4">Recomendation For You</Typography>
        </Typography>
        <Proslider />

        <CardMedia
          image="./imgs/products s.jpg"
          sx={{
            display: { xs: "none", md: "block" },
            width: "80%",
            height: "250px",
            position: "relative",
          }}
          className="img-Card"
        >
          <Box sx={{ position: "absolute", top: "70px", left: "50px" }}>
            <Typography variant="h4"> Offers</Typography>
            <Typography variant="h6">Buy 1 Get 1</Typography>

            <Button
              onClick={() => {
                navigate("/allpro");
              }}
              variant="contained"
              color="success"
            >
              Shop Now
            </Button>
          </Box>
        </CardMedia>
      </Box>

    </Box>
  );
}
