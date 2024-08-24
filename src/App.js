// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Routers from "./routes/Routers";
import React from "react";
// import { cartActions } from "./redux/slices/cartSlice";

function App() {
const cartState = useSelector((state)=>state.cart);
localStorage.setItem("cart",JSON.stringify(cartState))
  

  return <>
  <Header/>
<Routers/>
<Footer/>  
  </>;
}

export default App;
