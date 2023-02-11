import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { RiUserAddFill } from "@react-icons/all-files/ri/RiUserAddFill";
import { FiSearch } from "@react-icons/all-files/fi/FiSearch";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Navigation() {
  const [buttonlist, setbuttonlist] = useState(false);

  function updateMenu() {
    buttonlist ? setbuttonlist(false) : setbuttonlist(true);
    console.log(buttonlist);
  }

  const cart = useSelector((state) => state.cart.Cartitem);
  console.log(cart.length);

  return (
    <>
      <div className="Head" style={{ backgroundColor: "#EEE" }} expand="lg">
        <div className="Mobile-nav">
          <div className="img-nav">
            <img
              className="mx-3"
              src="./imgs/Ecommerce-logo.png"
              alt=""
              width={100}
            />
          </div>
          <div className="allbutton">
            <Link to="sign" className=" link mx-3">
              <button className="btn btn-outline-dark my-2">
                <RiUserAddFill className="mx-2" />
                SignUp
              </button>
            </Link>
            <Link to="/viewcart" className="link mx-3">
              <button className="btn btn-outline-dark">
                <AiOutlineShoppingCart />[{cart.length}]
              </button>
            </Link>
            <button
              className="h-list"
              onClick={() => {
                updateMenu();
              }}>
              <GiHamburgerMenu />
            </button>
            <div
              className={
                buttonlist ? "nav-list visible" : "nav-list notvisible"
              }>
              <div className="h-list-mop">
                <Link to="sign" className="link">
                  <button className="btn btn-outline-dark">
                    <RiUserAddFill className="mx-2" />
                    SignUp
                  </button>
                </Link>
                <Link to="/viewcart" className="link mx-3">
                  <button className="btn btn-outline-dark">
                    <AiOutlineShoppingCart />[{cart.length}]
                  </button>
                </Link>
                <button
                  className="h-list"
                  onClick={() => {
                    updateMenu();
                  }}>
                  <GiHamburgerMenu />
                </button>
              </div>

              <NavLink to="/" className="link mx-3">
                Home
              </NavLink>
              <h4>Categories</h4>
              <span className="LineM"></span>
              <NavLink to="/men's" className="link mx-3">
                Men's
              </NavLink>
              <NavLink to="/women's" className="link mx-3">
                Women's
              </NavLink>
              <NavLink to="/electronices" className="link mx-3">
                Electronices
              </NavLink>
              <NavLink to="/jewelery" className="link mx-3">
                Jewelery
              </NavLink>
              <span className="LineM"></span>
              <NavLink to="/about" className="link mx-3">
                About
              </NavLink>
              <NavLink to="/contact" className="link mx-3">
                Contact
              </NavLink>
            </div>
          </div>
        </div>

        <div className="all-nav">
          <div className="img-nav">
            <img
              className="mx-3"
              src="./imgs/Ecommerce-logo.png"
              alt=""
              width={100}
            />
          </div>
          <Form className="search-nav d-flex">
            <Form.Control
              type="search"
              placeholder="Search For Product"
              className="me-2"
              aria-label="Search"
            />
            <div className="icon-search">
              <FiSearch />
            </div>
          </Form>
          <div
            className="Nav-bar d-flex me-auto mx-auto my-2 my-lg-0  fs-5"
            style={{ maxHeight: "100px" }}>
            <NavLink to="/" className="link mx-3">
              Home
            </NavLink>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                <NavLink to="/men's" className="link mx-3">
                  Men's
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/women's" className="link mx-3">
                  Women's
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <NavLink to="/electronices" className="link mx-3">
                  Electronices
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/jewelery" className="link mx-3">
                  Jewelery
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/about" className="link mx-3">
              About
            </NavLink>
            <NavLink to="/contact" className="link mx-3">
              Contact
            </NavLink>
          </div>
          <div className="button">
            <Link to="sign" className="link">
              <button className="btn btn-outline-dark">
                <RiUserAddFill className="mx-2" />
                SignUp
              </button>
            </Link>
          </div>
          <div className="button">
            <Link to="/viewcart" className="link mx-3">
              <button className="btn btn-outline-dark">
                <AiOutlineShoppingCart />[{cart.length}]
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="search-mop">
        <Form className="search-m d-flex">
          <Form.Control
            type="search"
            placeholder="Search For Product"
            className="me-2"
            aria-label="Search"
          />
          <div className="icon-search">
            <FiSearch />
          </div>
        </Form>
      </div>
    </>
  );
}
