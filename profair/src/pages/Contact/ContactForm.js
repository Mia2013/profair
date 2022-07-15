import * as React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Button, Typography, Box } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function ContactForm({ styles }) {
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
    <Box
      style={styles.form}
      data-aos="zoom-in"
      sx={{ width: { xs: 1, lg: "80%" }, mb: 4, p: 4 }}
    >
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
            "& > :not(style)": { mx: "30px", mt: 1 },
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
            maxRows={6}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography variant="body1">
                Elolvastam és megértettem az 
                <Typography
                  sx={{

                    m: 1
                  }}
                  component="a"
                  variant="body1"
                  href="/adatvedelem"
                >
                  Adatvédelmi tájékoztatóban
                </Typography>
                foglaltakat
              </Typography>
            }
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
  );
}
