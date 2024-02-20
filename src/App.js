import "./App.css";
import Navbar from "./Common/Navbar";
import "./css/style.css";
import "./css/bootstrap.min.css";
import { Home, Cart, Shop } from "./pages/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Common/Footer";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;