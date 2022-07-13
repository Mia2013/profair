import * as React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Button, Typography, Box } from "@mui/material";
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
    <Box  height="100vh" style={styles.contactContainer} sx={{mt: 25}} >
      <Container style={styles.form} sx={{mt: 5 }} data-aos="zoom-in" >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h2" sx={{ my: 3 }} color="primary">
            Ajánlatkérés
          </Typography>
          <Typography variant="p">
            Kérje ajánlatunkat ingyenes előzetes helyszíni felméréssel!
          </Typography>
        </Box>
        <Container >
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
              control={<Checkbox  />}
              label="Elolvastam és megértettem az Adatvédelmi nyilatkozatban foglaltakat. 
                *"
            />

            <Button variant="contained" endIcon={<SendIcon />} sx={{width: "150px"}}>
              Küldés
            </Button>

            <Typography variant="subtitle2">
              *-al jelölt mezők kitöltése kötelező
            </Typography>
          </FormControl>
        </Container>
      </Container>
    </Box>
  );
}
