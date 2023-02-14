import React from "react";
import Footer from "../footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Box, Typography } from "@mui/material";


function About() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <>
      <Box className="about-us">
        <Box className="about-img mx-5" data-aos="fade-left">
          <img src="imgs/sale.png" alt="" />
        </Box>
        <Box className="content" data-aos="fade-right">
          <Typography variant="h3">Who we Are ?</Typography>
          <Typography variant="p">
            House Shop was born in 2022, we are a store that sells products at
            very reasonable prices for all categories and at the same time of
            very high quality and we have a staff that works 24 hours and our
            motto is "providing comfort for the customer" We offer the best
            offers and the highest quality
          </Typography>
        </Box>
      </Box>
      <Box className="f-t">
        <Typography variant="h3">Features</Typography>
        <Box className="feature">
          <Box className="card-f" data-aos="fade-down">
            <img src="./imgs/feature/free shipping.png" alt="" />
            <span>Free Shipping</span>
          </Box>
          <Box className="card-f" data-aos="fade-up">
            <img src="./imgs/feature/sell online.png" alt="" />
            <Typography variant="span">Sell Online</Typography>
          </Box>
          <Box className="card-f" data-aos="fade-down">
            <img src="./imgs/feature/save money.png" alt="" />
            <span>Save Money</span>
          </Box>
          <Box className="card-f" data-aos="fade-up">
            <img src="./imgs/feature/promotions.png" alt="" />
            <Typography variant="span">Promotions</Typography>
          </Box>
          <Box className="card-f" data-aos="fade-down">
            <img src="./imgs/feature/Happy sell.png" alt="" />
            <Typography variant="span">Happy Sell</Typography>
          </Box>
          <Box className="card-f" data-aos="fade-up">
            <img src="./imgs/feature/support.png" alt="" />
            <Typography variant="span">24h/Support</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default About;
