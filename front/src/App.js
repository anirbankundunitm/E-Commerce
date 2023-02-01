import "./App.css";
import Navbaar from "./Components/header/header/Navbaar";
import Newnav from "./Components/header/newnav/Newnav";
import Maincomp from "./Components/header/home/Maincomp";
import Footer from "./Components/header/Footer/Footer";
import SignIn from "./Components/header/Signup_signin/SignIn";
import SignUp from "./Components/header/Signup_signin/SignUp";
import Cart from "./Components/header/Cart/Cart";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbaar />
      <Newnav />
      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/getproductsone/:id" element={<Cart/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
