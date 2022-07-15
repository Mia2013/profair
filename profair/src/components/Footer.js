import * as React from "react";

import { Grid, Container, Box, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { PhoneLink, EmailLink } from "./LinkTags";

export default function FixedBottomNavigation() {
  return (
    <footer>
      <CssBaseline />
      <Box
        px={{ xs: 3, sm: 5 }}
        py={{ xs: 5, sm: 5 }}
        bgcolor="rgb(120,170,200)"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>ProfAir Kft.</Box>

              <Box>
                <Typography variant="body1">
                  Cégjegyzékszám 13-09-205696
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1">Adószám 27941175-2-13</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Elérhetőség</Box>
              <Box>
                <PhoneLink
                  variant="body1"
                  textColor="white"
                  iconColor="white"
                />{" "}
              </Box>
              <Box>
                <EmailLink variant="body1" iconColor="white" textColor="white"  />
              </Box>
         
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Elérhetőség</Box>
              <Box>
                <PhoneLink
                  variant="body1"
                  textColor="white"
                  iconColor="white"
                />{" "}
              </Box>
              <Box>
                <EmailLink variant="body1" iconColor="white" textColor="white"  />
              </Box>
         
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        bgcolor="text.secondary"
        color="white"
        sx={{ py: 2 }}
        textAlign="center"
      >
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography
              color="white"
              sx={{
                textDecoration: "none",
              }}
              component="a"
              variant="body1"
              href="/adatvedelem"
            >
              Adatvédelmi tájékoztató
            </Typography>{" "}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
