import React from "react";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Axios from "../../axiosinstance/axiosinstance";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AiTwotoneStar } from "@react-icons/all-files/ai/AiTwotoneStar";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../Store/cartslice";
import Footer from "../footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
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
      <div className="cartpage">
        <div data-aos="fade-left" className="all-d">
          <div className="d-pro">
            <div className="img-d">
              <Card.Img
                className="d-card"
                variant="top"
                src={product.image}
                style={{ width: "20rem", hight: "20rem" }}
              />
            </div>
            <div className="contnt-d">
              <h5>{product.category}</h5>
              <div className="d-cardText">
                <h3>{product.title}</h3>
                <div className="rate">
                  <h3>4.5</h3>
                  <AiTwotoneStar
                    style={{ color: "yellow", fontSize: "20px" }}
                  />
                  <h5 className="mx-3">200</h5>
                </div>
                <h5>${product.price}</h5>
                <p style={{ width: "80%" }}>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-to-cart" data-aos="fade-right">
          <h5>
            Price : <h5>${product.price}</h5>
          </h5>
          <p>
            Delivery December 8 - 25 Or fastest delivery Friday, December 16.
            Order within 6 hrs 45 mins
          </p>
          <button
            className="btn btn-success"
            onClick={() => dispatch(addtocart(product))}>
            Add To Cart
          </button>
          <p className="my-3">
            Return policy: Returnable until Jan 31, 2023 Add a gift receipt for
            easy returns
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Prodetails;
