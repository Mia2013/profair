import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "fontsource-roboto";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import AirConditioners from "./pages/AirConditioners";
import Service from "./pages/Service";
import Price from "./pages/Price";
import Contact from "./pages/Contact";



function App() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 3000,
      useClassNames: false,
      throttleDelay: 99,
      once: false,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }, []);

  return (
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="rolunk" element={<About />} />
            <Route path="klimak" element={<AirConditioners />} />
            <Route path="szolgaltatasok" element={<Service />} />
            <Route path="arak" element={<Price />} />
            <Route path="kapcsolat" element={<Contact />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
