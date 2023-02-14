import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import Heaader from "./componants/Nav-bar/Heaader";
import Footer from "./componants/footer/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <Router>
        <Heaader/>
        <ToastContainer />
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/men's" element={<Mens />} />
          <Route path="/women's"  element={<Women />} />
          <Route path="/jewelery"  element={<Jewelery />} />
          <Route path="/electronices" element={<Electronice />} />
          <Route path="/allpro" element={<Allpro />} />
          <Route path="/prodetails/:id" element={<Prodetails />} />
          <Route path="/viewcart" element={<Cart />} />
        
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
