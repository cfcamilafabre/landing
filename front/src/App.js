import "./App.css";
import AboutUs from "./components/aboutUs/AboutUs";
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
    </>
  );
}

export default App;
