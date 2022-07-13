import * as React from "react";

import { Grid, Container, Box, Link, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

export default function FixedBottomNavigation() {
  return (
    <footer>
        <CssBaseline />
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>ProfAir Kft.</Box>

              <Box>
                <Typography variant="p">Cégjegyzékszám 13-09-205696</Typography>
              </Box>
              <Box>
                <Typography variant="p">Adószám 27941175-2-13</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.primary"
        color="white"
      >
      
        <Container maxWidth="lg">
          {/* <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>ProfAir Kft.</Box>

              <Box>
                <Typography variant="p">Cégjegyzékszám 13-09-205696</Typography>
              </Box>
              <Box>
                <Typography variant="p">Adószám 27941175-2-13</Typography>
              </Box>
            </Grid>
          </Grid> */}
        </Container>
      </Box>

    </footer>
  );
}
