import { Typography, Grid } from "@mui/material";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loading() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Typography variant="h3" color="primary">
          Betöltés...
          <PacmanLoader variant="h2" color="rgba(25, 118, 210, 1)" size={40} />
        </Typography>
       </Grid>
    </Grid>
  );
}
