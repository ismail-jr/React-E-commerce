import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Products from "./Pages/Products";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer/Footer";
import banner_women from "./Components/Assets/banner_women.png";
import banner_men from "./Components/Assets/banner_mens.png";
import banner_kids from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/womens"
              element={<ShopCategory banner={banner_women} category="women" />}
            />
            <Route
              path="/mens"
              element={<ShopCategory banner={banner_men} category="men" />}
            />
            <Route
              path="/kids"
              element={<ShopCategory banner={banner_kids} category="kid" />}
            />
            <Route path="/products/:productID" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
