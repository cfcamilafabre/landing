import AboutUs from '../aboutUs/AboutUs';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Home from '../home/Home';
import Navbar from '../navbar/Navbar';
import Products from '../products/Products';

const Landing = () => {
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
};
export default Landing;
