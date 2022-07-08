import { Routes, Route  } from "react-router-dom";
import './App.css';
import 'fontsource-roboto';
import Grid  from "@mui/material/Grid";

import Home from "./pages/Home";
import About from "./pages/About";
import AirConditioners from "./pages/AirConditioners";
import Service from "./pages/Service";
import Price from "./pages/Price";
import Contact from "./pages/Contact";
import ButtonAppBar from "./components/Nav";

function App() {
  return (
    <Grid container className="App">
  <Grid item xs={12}>
    <ButtonAppBar  xs={12}/>
  </Grid>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="rolunk" element={<About />} />
          <Route path="klimak" element={<AirConditioners />} />
          <Route path="szolgaltatasok" element={<Service />} />
          <Route path="arak" element={<Price />} />
          <Route path="kapcsolat" element={<Contact />} />
        </Routes>
    </Grid>
  );
}

{/* <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid> */}

export default App;
