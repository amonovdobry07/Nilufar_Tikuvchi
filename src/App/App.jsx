import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "../Sections/Footer/Footer.jsx";

import Home from "../Pages/Home.jsx";
import Maxsulotlar from "../Pages/Maxsulotlar.jsx";
import Xizmatlar from "../Pages/Xizmatlar.jsx";
import MarketPlace from "../Pages/MarketPlace.jsx";
import MarketPlaceSingl from "../Pages/MarketPlaceSingl.jsx";
import Aloqa from "../Pages/Aloqa.jsx";
import Header from "../Sections/Header/Header.jsx";

export default function App() {
  return (
    <div>
      <div className="appShell">
        <Header/>
        <div className="appMain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Maxsulotlar />} />
            <Route path="/services" element={<Xizmatlar />} />
            <Route path="/marketplace" element={<MarketPlace />} />
            <Route path="/marketplace/:market" element={<MarketPlaceSingl />} />
            <Route path="/contact" element={<Aloqa />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}
