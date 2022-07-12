import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";

import FirstLineAppbar from "./FirstLineAppbar.js";
import SecondLineAppBar from "./SecondLineAppbar";


const Navbar = () => {

  return (
         <>
      <CssBaseline />
        <AppBar position="fixed">
          <FirstLineAppbar />
          <SecondLineAppBar />
        </AppBar>
      </>

  );
};
export default Navbar;


