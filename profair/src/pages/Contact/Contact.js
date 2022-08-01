import * as React from "react";
import { Typography, Grid } from "@mui/material";
// import Wrapper from "../../components/Wrapper";
import ContactForm from "./ContactForm";
import ContactContent from "./ContactContent";

const styles = {
  contactContainer: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/contactBackground.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",

    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  },
  form: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: " 95%",
    borderRadius: "25px",
    margin: "20px",
  },
};

export default function Contact() {
  // const [formData, setFormData] = React.useState({});

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // console.log(formData);

  // const contactInfo = [
  //   { name: "Telefonszám",
  //     data: "+36 20 559 0387",
  //     href: "tel:+3620-559-0387",
  //     icon: '<LocalPhoneIcon sx={{ mr: 1, pt: 0.5 }} color="primary" />'
  //   },
  //   {
  //     name: "Email cím",
  //     data: "budavari.balint@profair.hu",
  //     href: "mailto: budavari.balint@profair.hu",
  //     icon: '<EmailIcon sx={{ mr: 1, pt: 0.5 }} color="primary" />'
  //   }
  // ]

  return (
  
    <Grid
      container
      style={styles.contactContainer}
      spacing={2}
      sx={{mt: 15, pb: 10}}    >
      <Grid item xs={12} sx={{ mx: "auto" }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", my: 5, fontWeight: "bold" }}
          color="primary"
        >
          Kapcsolat
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={5} sx={{ mx: "auto" }}>
        <ContactContent styles={styles} />
      </Grid>

      <Grid item xs={12} md={6} lg={5} sx={{ mx: "auto" }}>
        <ContactForm styles={styles} />
      </Grid>
    </Grid>
   
    
  );
}
