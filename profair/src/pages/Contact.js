import * as React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import {
  Button,
  Typography,
  Box,
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardContent,
} from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const styles = {
  contactContainer: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/contactBackground.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  form: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "10px",
    borderRadius: "25px",
  },
};

export default function Contact() {
  const [formData, setFormData] = React.useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(formData);

  return (
    <Grid
      container
      columns="12"
      style={styles.contactContainer}
      sx={{ mt: 8, pb: 10 }}
      spacing={2}
    >
      <Grid item xs={12} sx={{ mx: "auto" }}>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", my: 5, fontWeight: "bold" }}
          color="primary"
        >
          Kapcsolat
        </Typography>
      </Grid>
      <Grid item xs={12} md={5} sx={{ mx: { xs: "20px", sm: "auto" } }}>
        <Container>
          <Typography variant="body1">
            Vállalkozásunk kizárólag helyszíni felmérés után ad konkrét
            árajánlatot, mivel ingatlanonként és megrendelőnként más
            feltételeknek kell megfelelnie.
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
                alignItems: "center",
              }}
            >
              <Avatar
                src={`${process.env.PUBLIC_URL}/assets/avatar.jpg`}
                sx={{ width: 90, height: 90, mr: 3 }}
              />
              <Box>
                <Typography variant="h4">Budavári Bálint</Typography>
                <Typography variant="subtitle2">
                  Klíma- és villanyszerelő
                </Typography>
              </Box>
            </Container>
            <Container>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography
                  color="text.primary"
                  sx={{
                    textDecoration: "none",
                  }}
                  component="a"
                  variant="h6"
                  noWrap
                  href="tel:+3620-559-0387"
                >
                  <LocalPhoneIcon sx={{ mr: 1, pt: 0.5 }} />
                  Telefonszám: +36 20 559 0387
                </Typography>
                <Typography
                  color="text.primary"
                  sx={{
                    textDecoration: "none",
                    my: 5,
                  }}
                  component="a"
                  variant="h6"
                  noWrap
                  href="mailto: budavari.balint@profair.hu"
                >
                  <EmailIcon sx={{ mr: 1, pt: 0.5 }} /> E-mail cím:
                  budavari.balint@profair.hu
                </Typography>
                <Typography variant="h6">
                  <FmdGoodIcon sx={{ mr: 1, pt: 0.5 }} /> Szolgáltatási terület:
                  Budapest és Pest megye elsősorban
                </Typography>
              </Box>
            </Container>
          </Box>
        </Container>
      </Grid>

      <Grid item xs={12} md={5} sx={{ mb: 4, mx: 4 }}>
        <Box style={styles.form} data-aos="zoom-in">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="h5" color="primary">
              Ajánlatkérés
            </Typography>
          </Box>
          <Container>
            <FormControl
              fullWidth
              sx={{
                "& > :not(style)": { mx: "30px", mt: 2 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-name"
                label="Név"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <TextField
                id="outlined-name"
                label="E-mail cím"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                id="outlined-name"
                label="Telefonszám"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <TextField
                id="outlined-name"
                label="Cím (település, utca)"
                name="address"
                value={formData.phoneNumber}
                onChange={handleChange}
                helperText="Ahova a klímát szeretné beszereltetni"
                required
              />
              <TextField
                id="outlined-name"
                label="Üzenet"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                minRows={2}
                maxRows={8}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Elolvastam és megértettem az Adatvédelmi nyilatkozatban foglaltakat. 
                *"
              />

              <Button
                variant="contained"
                endIcon={<SendIcon />}
                sx={{ width: "150px" }}
              >
                Küldés
              </Button>

              <Typography variant="subtitle2">
                *-al jelölt mezők kitöltése kötelező
              </Typography>
            </FormControl>
          </Container>
        </Box>
      </Grid>
    </Grid>
  );
}
