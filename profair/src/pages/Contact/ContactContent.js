import * as React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

import { Typography, Box, Avatar } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { PhoneLink, EmailLink } from "../../components/LinkTags";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactContent() {
  return (
    <Root>
      <Box sx={{ width: "100%", mb: 4, p: 5 }} data-aos="fade-right">
        <Typography variant="body1">
          Vállalkozásunk kizárólag helyszíni felmérés után ad konkrét
          árajánlatot, mivel ingatlanonként és megrendelőnként más feltételeknek
          kell megfelelnie.
        </Typography>
        <Box sx={{ mt: 8 }}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              mb: 8,
              py: 4,
              borderTop: 1,
              borderBottom: 1,
              alignItems: { xs: "flex-start", sm: "center" },
            }}
          >
            <Avatar
              src={`${process.env.PUBLIC_URL}/assets/avatar.jpg`}
              sx={{
                width: { xs: 60, sm: 90 },
                height: { xs: 60, sm: 90 },
                mr: 3,
              }}
            />
            <Box>
              <Typography variant="h4">Budavári Bálint</Typography>
              <Typography variant="subtitle2">
                Klíma- és villanyszerelő
              </Typography>
            </Box>
          </Container>
          <Container>
            <Box display={"flex"} flexDirection={"column"} columnGap="20px">
              <Typography
                color="text.primary"
                sx={{
                  textDecoration: "none",
                }}
                component="a"
                variant="h6"
                href="tel:+3620-559-0387"
              >
                <LocalPhoneIcon sx={{ mr: 1, pt: 0.5 }} color="primary" />
                Telefonszám: +36 20 559 0387
              </Typography>
              {/* <PhoneLink variant={"h6"} />
              <EmailLink variant={"h6"}/> */}

              <Typography
                color="text.primary"
                sx={{
                  textDecoration: "none",
                  my: 5,
                }}
                component="a"
                variant="h6"
                href="mailto: budavari.balint@profair.hu"
              >
                <EmailIcon sx={{ mr: 1, pt: 0.5 }} color="primary" /> E-mail
                cím: budavari.balint@profair.hu
              </Typography>
              <Typography variant="h6">
                <FmdGoodIcon sx={{ mr: 1, pt: 0.5 }} color="primary" />{" "}
                Szolgáltatási terület: Budapest és Pest megye elsősorban
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </Root>
  );
}

const Root = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: " 90%",
    borderRadius: "25px",
    margin: "20px",
  },

  [theme.breakpoints.up("lg")]: {
    backgroundColor: "transparent",
  },
}));

// export default function MediaQuery() {
//   return (
//     <Root>
//       <Typography>down(md): red</Typography>
//       <Typography>up(md): blue</Typography>
//       <Typography>up(lg): green</Typography>
//     </Root>
//   );
// }
