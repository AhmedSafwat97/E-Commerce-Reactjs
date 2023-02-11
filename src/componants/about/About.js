import React from "react";
import Footer from "../footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function About() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <>
      <div className="about-us">
        <div className="about-img mx-5" data-aos="fade-left">
          <img src="imgs/sale.png" alt="" />
        </div>
        <div className="content" data-aos="fade-right">
          <h2>Who we Are ?</h2>
          <p>
            House Shop was born in 2022, we are a store that sells products at
            very reasonable prices for all categories and at the same time of
            very high quality and we have a staff that works 24 hours and our
            motto is "providing comfort for the customer" We offer the best
            offers and the highest quality
          </p>
        </div>
      </div>
      <div className="f-t">
        <h3>Features</h3>
        <div className="feature">
          <div className="card-f" data-aos="fade-down">
            <img src="./imgs/feature/free shipping.png" alt="" />
            <span>Free Shipping</span>
          </div>
          <div className="card-f" data-aos="fade-up">
            <img src="./imgs/feature/sell online.png" alt="" />
            <span>Sell Online</span>
          </div>
          <div className="card-f" data-aos="fade-down">
            <img src="./imgs/feature/save money.png" alt="" />
            <span>Save Money</span>
          </div>
          <div className="card-f" data-aos="fade-up">
            <img src="./imgs/feature/promotions.png" alt="" />
            <span>Promotions</span>
          </div>
          <div className="card-f" data-aos="fade-down">
            <img src="./imgs/feature/Happy sell.png" alt="" />
            <span>Happy Sell</span>
          </div>
          <div className="card-f" data-aos="fade-up">
            <img src="./imgs/feature/support.png" alt="" />
            <span>24h/Support</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
