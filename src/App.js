import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./componants/Nav-bar/Header";
import Home from "./componants/Home/Home";
import About from "./componants/about/About";
import Contact from "./componants/contact/contact";
import Jewelery from "./componants/products/Jewelery";
import Mens from "./componants/products/Mens";
import Women from "./componants/products/women";
import Electronice from "./componants/products/Electronice";
import Allpro from "./componants/products/Allpro";
import Cart from "./componants/Cart/Cart";
import Prodetails from "./componants/products/Prodetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <Router>
        <Navigation />
        <ToastContainer />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/men's" exact element={<Mens />} />
          <Route path="/women's" exact element={<Women />} />
          <Route path="/jewelery" exact element={<Jewelery />} />
          <Route path="/electronices" exact element={<Electronice />} />
          <Route path="/allpro" exact element={<Allpro />} />
          <Route path="/prodetails/:id" exact element={<Prodetails />} />
          <Route path="/viewcart" exact element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
