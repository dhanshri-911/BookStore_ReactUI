import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  useRouteMatch,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Register from "../src/component/register/Register";
import Home from "../src/component/home/Home";
import Login from "../src/component/login/Login";
import AddToCart from "./component/cart/Cart";
import { useState } from "react";
import AddressForm from "../src/component/address/AddressForm"
import Order from "../src/component/order/Order"
import Address from "../src/component/address/Address"



function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/addressForm" element={<AddressForm />} />
        <Route path="/order" element={<Order />} />
        <Route path="/address" element={<Address />} />
        
        

      </Routes>
    </div>
  );
}

export default App;
