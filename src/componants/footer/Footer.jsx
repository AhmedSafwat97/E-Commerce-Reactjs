import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaPinterestP } from "@react-icons/all-files/fa/FaPinterestP";
import { FaApple } from "@react-icons/all-files/fa/FaApple";
import { FaGooglePlay } from "@react-icons/all-files/fa/FaGooglePlay";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <Typography className="Title-footer">Get Exclusive Offers</Typography>
      <Form className="form-footer d-flex ">
        <Form.Control
          type="email"
          placeholder="Type Your Email"
          className="me-2 "
          aria-label="Sign in"
        />
        <Button variant="outline-success">SignUp</Button>
      </Form>

      <Box div className="f-content">
        <Box className="d-flex flex-column">
          <Box>
            <Box className="logo-footer">
            <Typography variant="h4" sx={{color : "white"}}>House Shop</Typography>
              <Typography variant="p" sx={{color : "white"}} mx="10px">Save More Money With House Shop</Typography>
              <Typography variant="span" className="Line"></Typography>
            </Box>
            <Box className="thecontainer">
              <Box className="about">
                <Typography variant="h6">About</Typography>
                <Link to="/about">About us</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms & Conditions</Link>
              </Box>
              <Box className="about">
                <Typography variant="h6">Contact</Typography>
                <Link to="/">Contact Us</Link>
                <Link to="/">Delivery Information</Link>
              </Box>

              <Box class="about">
                <Typography variant="h6">My Account</Typography>
                <Link to="/">Sign in</Link>
                <Link to="/">View Cart</Link>
                <Link to="/">Track My Order</Link>
                <Link to="/">Help</Link>
              </Box>
            </Box>

            <Box className="icons">
              <a href="http://www.facebook.com">
                <FaFacebookF style={{ color: "white" }} />
              </a>
              <a href="http://twiter.com">
                <FaTwitter style={{ color: "white" }} />
              </a>
              <a href="http://www.instagram.com">
                <FaInstagram style={{ color: "white" }} />
              </a>
              <a href="http://www.instagram.com">
                <FaPinterestP style={{ color: "white" }} />
              </a>
            </Box>
            <Box className="icons app">
              <a href="/">
                <FaApple style={{ color: "white" }} />
                App Store
              </a>
              <a href="/">
                <FaGooglePlay style={{ color: "white" }} />
                Google Play
              </a>
            </Box>
            <Box className="rights">
              <Typography variant="p">© House Shop . All Rights Reserved</Typography>
              <Link to="/" className="mx-2">
                Privacy
              </Link>
              <p>|</p>
              <Link Link to="/" className="mx-2">
                {" "}
                Policy{" "}
              </Link>
              <p>|</p>
              <a href="/" className="mx-2">
                Copyright
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
