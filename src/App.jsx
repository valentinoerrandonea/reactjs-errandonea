import NavBar from "./components/NavBar/Navbar";
import { HomePage } from "./components/Pages/Home/Home";
import ClothingCards from "./components/Pages/Product/Products/ClothingCards";
import { AccCards } from "./components/Pages/Product/Products/AccCards";
import Footer from "./components/Footer/Footer";
import { About } from "./components/Pages/About/About";
import { Products } from "./components/Pages/Product/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Pages/Error/Error404";
// import Product3 from "./components/Pages/Product/Products/ExpandSelectionClothing";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/clothing" element={<ClothingCards />} />
        <Route path="/products/accesories" element={<AccCards />} />
        {/* <Route path="/product3" element={<Product3 />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
