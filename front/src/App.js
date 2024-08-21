import "./App.css";
import AboutUs from "./components/aboutUs/AboutUs";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutUs></AboutUs>
      <Products></Products>
      <Contact/>
    </>
  );
}

export default App;
