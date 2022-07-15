import { Typography } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

export const PhoneLink = (variant, iconColor) => {
  return (
    <Typography
      color="inherit"
      sx={{
        textDecoration: "none",
      }}
      component="a"
      variant={{variant}}
      href="tel:+3620-559-0387"
    >
      <LocalPhoneIcon sx={{ mr: 1, pt: 0.8, color: {iconColor} }}  />
      Telefonszám: +36 20 559 0387
    </Typography>
  );
};
export const EmailLink = (variant, iconColor) => {
  return (
    <Typography
      color="inherit"
      sx={{
        textDecoration: "none",
        my: 5,
      }}
      component="a"
      variant={variant}
      href="mailto: budavari.balint@profair.hu"
    >
      <EmailIcon sx={{ mr: 1, pt: 0.8, color:{iconColor}}}  /> E-mail cím:
      budavari.balint@profair.hu
    </Typography>
  );
};
