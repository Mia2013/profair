import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";


import Typography from "@mui/material/Typography";

export default function HomeContent({content}) {
  



  return (
    <Grid container columns="12" className="home-container">
      <Grid item xs={12}>
        <Typography
          noWrap
          component="img"
          sx={{
            width: "100%",
          }}
          src={`${process.env.PUBLIC_URL}/assets/home-cover.jpg`}
        ></Typography>
      </Grid>
      <Container maxWidth="xl" data-aos="fade-up">
        <Grid item xs={10} sx={{ mx: "auto" }}>
          <Typography variant="h2" sx={{ textAlign: "center", my: 5 }}>
            Miért épp minket válasszon?
          </Typography>
          <Typography variant="p" sx={{ textAlign: "center", my: 5 }}>
            Több, mint 10 éves szakmai tapasztalattal állunk ügyfeleink
            rendelkezésére. A klímaszerelés mellett szolgáltatásainkat
            kibővítettük villanyszereléssel is, hogy Önöknek még teljeskörűbb
            szolgáltatást tudjunk nyujtani. Nálunk nem kérdés, hogy csakis
            minőségi alapanyagokból dolgozunk, mert jót csak jóból lehet
            csinálni.
          </Typography>
        </Grid>
        <Grid container item xs={9} sx={{ mx: "auto", mt: 16 }} gap={2} data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          {content.map((item) => (
            <Grid item xs={12} sm={5} lg={2} sx={{ mx: "auto" }}>
              <Box key={item.name} sx={{ textAlign: "center", my: 5 }} >
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h6">{item.text}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* <Grid item>
        <Typography variant="caption">
          Bízza a profikra, bízza a ProfAirre!
        </Typography>
      </Grid> */}
    </Grid>
  );
}
