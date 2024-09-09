import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
// import Modal from "./components/Modal";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "./store";
import { fetchCartData } from "./store/cart/actions";


function App() {
  const dispatch: AppDispatch  = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
}, [dispatch]);

  return (
    <Router>
      <Navbar />
      {/* <Modal /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
