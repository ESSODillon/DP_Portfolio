import React from "react";
import "./css/styles.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages and Components
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Thanks from "./pages/thanks/Thanks";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
      <Footer />

      <Copyright />
    </BrowserRouter>
  </React.StrictMode>
);
