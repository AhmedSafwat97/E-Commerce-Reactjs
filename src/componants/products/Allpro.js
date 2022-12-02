import React from "react";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Axios from "../../axiosinstance/axiosinstance";
import { addtocart } from "../../Store/cartslice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
function Allpro() {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    Axios.get("/products?limit=20")
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
      <div className="d-flex justify-content-center mt-3 fw-bold ">
        <h1>Latest Products</h1>
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
      <Footer />
    </>
  );
}

export default Allpro;
