import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/Phone";

import Link from "@material-ui/core/Link";

const FirstLineAppbar = () => {
  return (
    <Container maxWidth="100%" sx={{ bgcolor: "white" }}>
      <Toolbar
        disableGutters
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Box component={Link} href="/" sx={{ my: 2 }}>
          <Typography
            noWrap
            component="img"
            sx={{
              display: { xs: "none", sm: "flex" },
              width: { sm: "70%", md: "50%", lg: "30%" },
            }}
            src={`${process.env.PUBLIC_URL}/assets/Profair.png`}
          ></Typography>
        </Box>

        <Box
          component={Link}
          href="/"
          sx={{
            display: { xs: "flex", sm: "none" },
            flexDirection: "column",
            alignItems: "center",
            m: 1,
          }}
        >
          <Typography
            noWrap
            component="img"
            src={`${process.env.PUBLIC_URL}/assets/Profair.png`}
            sx={{
              width: "50%",
              mb: 2,
            }}
          ></Typography>
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                color: "primary",
                textDecoration: "none",
                fontSize: "0.8rem",
              }}
              component="a"
              noWrap
              href="tel:+3620-559-0387"
            >
              <LocalPhoneIcon sx={{ mr: 0.5, fontSize: "1rem" }} />
              +36 20 559 0387
            </Typography>
            <Typography
              sx={{
                color: "primary",
                textDecoration: "none",
                fontSize: "0.8rem",
                ml: 2,
              }}
              component="a"
              noWrap
              href="mailto: budavari.balint@profair.hu"
            >
              <EmailIcon sx={{ mr: 0.5, fontSize: "1rem" }} />{" "}
              budavari.balint@profair.hu
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: { sm: "column", md: "row" },
            ml: { sm: 3 },
            alignItems: "flex-end",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              letterSpacing: { xs: 0, sm: "0.1rem" },
              color: "primary",
              textDecoration: "none",
              mr: { md: 2 },
              py: 1,
            }}
            component="a"
            noWrap
            href="tel:+3620-559-0387"
          >
            <LocalPhoneIcon sx={{ mr: 1 }} />
            Budavári Bálint: +36 20 559 0387
          </Typography>
          <Typography
            sx={{
              display: "flex",
              letterSpacing: { xs: 0, sm: "0.1rem" },
              color: "primary",
              textDecoration: "none",
              py: 1,
            }}
            component="a"
            noWrap
            href="mailto: budavari.balint@profair.hu"
          >
            <EmailIcon sx={{ mr: 1 }} />
            budavari.balint@profair.hu
          </Typography>
        </Box>
      </Toolbar>
    </Container>
  );
};
export default FirstLineAppbar;
