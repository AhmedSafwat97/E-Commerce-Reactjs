import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaPinterestP } from "@react-icons/all-files/fa/FaPinterestP";
import { FaApple } from "@react-icons/all-files/fa/FaApple";
import { FaGooglePlay } from "@react-icons/all-files/fa/FaGooglePlay";
function Footer() {
  return (
    <>
      <h2 className="Title-footer">Get Exclusive Offers</h2>
      <Form className="form-footer d-flex ">
        <Form.Control
          type="email"
          placeholder="Type Your Email"
          className="me-2 "
          aria-label="Sign in"
        />
        <Button variant="outline-success">SignUp</Button>
      </Form>

      <div div className="f-content">
        <div className="d-flex flex-column">
          <div>
            <div className="logo-footer">
              <img src="./imgs/Logo-footer.png" alt="" width={140} />
              <p>Save More Money With House Shop</p>
              <span className="Line"></span>
            </div>
            <div className="thecontainer">
              <div className="about">
                <h4>About</h4>
                <a href="/">About us</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms & Conditions</a>
              </div>
              <div className="about">
                <h4>Contact</h4>
                <a href="/">Contact Us</a>
                <a href="/">Delivery Information</a>
              </div>

              <div class="about">
                <h4>My Account</h4>
                <a href="/">Sign in</a>
                <a href="/">View Cart</a>
                <a href="/">Track My Order</a>
                <a href="/">Help</a>
              </div>
            </div>

            <div className="icons">
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
            </div>
            <div className="icons app">
              <a href="/">
                <FaApple style={{ color: "white" }} />
                App Store
              </a>
              <a href="/">
                <FaGooglePlay style={{ color: "white" }} />
                Google Play
              </a>
            </div>
            <div className="rights">
              <p>© House Shop . All Rights Reserved</p>
              <a className="mx-2" href="/">
                Privacy
              </a>
              <p>|</p>
              <a href="/" className="mx-2">
                {" "}
                Policy{" "}
              </a>
              <p>|</p>
              <a href="/" className="mx-2">
                Copyright
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
