import "./styles.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import AllRoutes from "./Routes/AllRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AllRoutes />
    </BrowserRouter>
  );
}
