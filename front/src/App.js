import "./App.css";
import AboutUs from "./components/aboutUs/AboutUs";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
