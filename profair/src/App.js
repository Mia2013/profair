import React, { useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import "fontsource-roboto";
import Box from "@mui/material/Box";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Nav/Nav";
import FixedBottomNavigation from "./components/Footer"
import Loading from "./components/Loading/Loading";

const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About"));
const AirConditioners = React.lazy(() => import("./pages/AirConditioners"));
const Service = React.lazy(() => import("./pages/About"));
const Price = React.lazy(() => import("./pages/Price"));
const Contact = React.lazy(() => import("./pages/Contact"));

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
      <Suspense fallback={<Loading />}>
        <Box  sx={{width: 1, mt: {xs: 20, sm: 18, md: 16, lg: 16, xl: 17}}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="rolunk" element={<About />} />
            <Route path="klimak" element={<AirConditioners />} />
            <Route path="szolgaltatasok" element={<Service />} />
            <Route path="arak" element={<Price />} />
            <Route path="kapcsolat" element={<Contact />} />
          </Routes>
        </Box>
      </Suspense>
      <FixedBottomNavigation />
    </div>
  );
}

export default App;
