import React from "react";
import Footer from "../footer/Footer";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Axios from "../../axiosinstance/axiosinstance";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Store/cartslice";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    Axios.get("/products?limit=4")
      .then((res) => {
        console.log(res);
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  const dispatch = useDispatch();

  return (
    <div>
      <Card className="border-0">
        <Card.Img src="./imgs/Bg-home.jpg" alt="Card image" />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center">
          <div className="container mx-5">
            <h5>House Shop Offers</h5>
            <h2 className="fw-bolder  display-5 fs-30">Super Value Deals</h2>
            <h3>On All Products</h3>
            <p>Check Out All The Trends</p>
            <Link to="/allpro">
              <button className="btn - btn-outline-dark">Shop Now</button>
            </Link>
          </div>
        </Card.ImgOverlay>
      </Card>
      <div className="c-text">
        <h1>Categories</h1>
      </div>
      <div className="categories">
        <Card
          data-aos="fade-up"
          className="mx-3 my-3"
          style={{ width: "18rem" }}>
          <Card.Header>Electronice</Card.Header>
          <Card.Body>
            <img className="cat-img" src="./imgs/elect.jpg" alt="" />
          </Card.Body>
          <Link to="/electronices" className="s-Now">
            Shop Now
          </Link>
        </Card>
        <br />

        <Card
          data-aos="fade-down"
          className="mx-3 my-3"
          style={{ width: "18rem" }}>
          <Card.Header>Women's</Card.Header>
          <Card.Body>
            <img className="cat-img" src="./imgs/women.jpg" alt="" />
            <Card.Text></Card.Text>
          </Card.Body>
          <Link to="/women's" className="s-Now">
            Shop Now
          </Link>
        </Card>
        <br />

        <Card
          data-aos="fade-up"
          className="mx-3 my-3"
          style={{ width: "18rem" }}>
          <Card.Header>Men's</Card.Header>
          <Card.Body>
            <img className="cat-img" src="./imgs/men.jpg" alt="" />
            <Card.Text></Card.Text>
          </Card.Body>
          <Link to="/men's" className="s-Now">
            Shop Now
          </Link>
        </Card>
        <br />

        <Card
          data-aos="fade-down"
          className="mx-3 my-3"
          style={{ width: "18rem" }}>
          <Card.Header>Jewelery</Card.Header>
          <Card.Body>
            <img className="cat-img" src="./imgs/j.jpg" alt="" />
            <Card.Text></Card.Text>
          </Card.Body>
          <Link to="/jewelery" className="s-Now">
            Shop Now
          </Link>
        </Card>

        <Card className="banar bg-dark text-white">
          <img className="img-paner" src="./imgs/cart.jpg" alt="" />
          <Card.ImgOverlay>
            <div className="card-body my-4">
              <Card.Title>Offers</Card.Title>
              <h2>Buy Now And Save 50%</h2>
              <Card.Text></Card.Text>
              <button className="btn btn-outline-dark">Buy Now</button>
            </div>
          </Card.ImgOverlay>
        </Card>
        <div className="d-flex justify-content-center mt-3 fw-bold ">
          <h1>Recomendation For You</h1>
        </div>
        <div className="carts-container">
          {product.map((product) => {
            return (
              <div
                data-aos="fade-down"
                className="the-card"
                style={{ width: "18rem" }}
                key={product.id}>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  to={`/prodetails/${product.id}`}>
                  <Card.Img
                    className="img-card"
                    variant="top"
                    src={product.image}
                  />
                </Link>

                <div className="cardText">
                  {product.category}
                  <h3>{product.title}</h3>
                </div>
                <div className="to-cart">
                  <h5>${product.price}</h5>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => dispatch(addtocart(product))}>
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <Card className="banar bg-dark text-white">
          <img className="img-paner" src="./imgs/products s.jpg" alt="" />
          <Card.ImgOverlay>
            <div className="card-body my-4">
              <Card.Title>Offers</Card.Title>
              <h2>Buy 1 Get 1</h2>
              <Card.Text></Card.Text>
              <button className="btn btn-outline-dark">Buy Now</button>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
