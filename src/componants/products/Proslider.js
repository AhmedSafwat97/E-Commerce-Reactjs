import React from 'react';
import Axios from "../../axiosinstance/axiosinstance";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Store/cartslice";
import AOS from "aos";
import { FcNext } from "@react-icons/all-files/fc/FcNext";
import { FcPrevious } from "@react-icons/all-files/fc/FcPrevious";

const Proslider = () => {
    const [product, setproduct] = useState([]);
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
    const Slider = document.getElementById("slider")
    Slider.scrollLeft = Slider.scrollLeft + 250
  }
  const right = () => {
    const Slider = document.getElementById("slider")
    Slider.scrollLeft = Slider.scrollLeft - 250
  }
    return (
        <div style={{width:"75%" , position:"relative"}}>
          <div className="buttons">
            <button className="btn btn-success" onClick={()=>{right()}}><FcPrevious style={{color:"white" , fontSize:"20px"}}/></button>
            <button className="btn btn-success" onClick={()=>{left()}}><FcNext style={{color:"white" , fontSize:"20px"}}/></button>
          </div>
          <div className="carts-slider" id="slider">
              <div className="slider" >
                {product.map((product) => {
                  return (
                    <div
                      className="the-card"
                      style={{ width: "240px" }}
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
        </div>
          </div>
    );
}

export default Proslider;
