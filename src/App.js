import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import CustomNavbar from "./Components/Navbar";
import ListProduct from "./Components/ListProduct";
import ProductDetails from "./Components/ProductDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./Components/Shop";
import { articles } from "./data";
import { useState } from "react";

function App() {
  let [shop, setShop] = useState([]);
  const add = (id) => {
    let product = articles.find((elt) => elt.id == id);
    shop = [...shop, product];
    setShop(shop);
  };
  return (
    <BrowserRouter>
      <CustomNavbar shop={shop} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/list"
          element={<ListProduct articles={articles} add={add} />}
        />
        <Route
          path="/:id"
          element={<ProductDetails articles={articles} add={add} />}
        />
        <Route path="/shop" element={<Shop shop={shop} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
