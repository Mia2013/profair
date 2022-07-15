import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const prices = [
  { type: "3,5 kw", price: 75000 },
  { type: "Előcsövezett", price: 50000 },
];

const styles = {
  contactContainer: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/pricesBackground.webp)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",

    backgroundPosition: "center",
  },
  form: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: " 95%",
    borderRadius: "25px",
    margin: "20px",
  },
};

export default function Price() {
  return (
    <Grid       style={styles.contactContainer}
     container columns="12" sx={{ mt: 20, pb: 10 }}>
      <Grid
        item
        xs={12}
        sx={{ mx: { xs: "30px", md: "150px", p: "0" }, mb: 10 }}
      >
        {" "}
        <Typography
          variant="h3"
          sx={{ textAlign: "center", my: 5, fontWeight: "bold" }}
          color="primary"
        >
          Árak
        </Typography>
      </Grid>

      <Container maxWidth="xl">
        <Grid
          container
          item
          xs={9}
          sx={{ mx: "auto", mt: 7 }}
          gap={2}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {prices.map((item) => (
            <Grid
              item
              xs={12}
              sm={5}
              lg={2}
              sx={{ mx: "auto" }}
              data-aos="flip-left"
            >
              <Box key={item.type} sx={{ textAlign: "center", my: 5 }}>
                <Typography variant="h4" sx={{ mt: 5 }}>
                  {item.type}
                </Typography>
                <Typography variant="h6">{item.price}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid item xs={12}>
        <Typography variant="caption">
          Mit tartalmaz az ár?
A beszerelés ára tartalmazza
Az oldalfali split klíma beltéri egység felszerelését, bekötését
Split klíma kültéri egység felszerelését, bekötését maximum 4 méter magasságban
Hűtőkör nyomáspróbáját, vákuumozását, szakszerű beüzemelését
9mm hőszigeteléssel ellátott rézcső pár kiépítését dekorcsatornában (a gyártók által meghatározott minimum) 2 fm-ig
Megerősített és rezgéscsillapított kültéri egységet tartó fali vagy trapéz konzolt
Kondenzvíz gravitációs elvezetését a rézcsövek irányába kábelcsatornában 2 fm-ig
A klímaszerelés során az elektromos betáplálás kiépítését a rézcsövek irányába kábelcsatornában 2 fm-ig
A szerelés ára tartalmazza továbbá
A klímaberendezést, valamint a klima szereléshez szükséges anyagok helyszínre szállítását
A munkaterületre történő kiszállási költséget (Budapesten és Pest megyében)
A klíma szerelő és a segédmunkás munkadíját
Egyszeri főfal átfúrását
Takarófóliát, hullámpapír leterítést, lábzsák használatát (az értékek megóvása érdekében)
A keletkezett törmelék eltakarítását
A telepített klímaberendezés szakszerű beüzemelését
12 hónap vagy a rendszeres, velünk végzett klíma karbantartás esetén a készülék gyártója által meghatározott garancia időtartalmáig szóló jótállást a klímaszerelésre
Hosszú rézcső pár esetén a gyári hűtőközegen felül szükséges gáztöltést
A készülék gazdaságos és komfortos üzemeltetésének betanítását
        </Typography>
 

      </Grid>
    </Grid>
  );
}
