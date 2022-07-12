import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import MediaCard from "../components/Card";

export default function AirConditioners() {
  const airConditioners = [
    {
      name: "Gree Comfort X",
      desciption: "",
      price: "300000",
      img: "greeComfortX",
    },
    {
      name: "Gree Comfort Xx",
      desciption: "gjlkfjfdlkj",
      price: "300000",
      img: "greeComfortX",
    },
    {
      name: "Gree Comfort Xxx",
      desciption: "",
      price: "300000",
      img: "greeComfortX",
    },
    {
      name: "Gree Comfort Xxxx",
      desciption: "",
      price: "300000",
      img: "greeComfortX",
    },
    {
      name: "Gree Comfort Xxxx xxxxxxxxxxx",
      desciption: "",
      price: "300000",
      img: "greeComfortX",
    },
  ];
  return (
    <Grid container columns="12">
      <Grid item xs={12}         sx={{ mx: { xs: "30px", md: "150px", p:"0", mt: 10 }, mb: 10 }}
>
        <Typography
          variant="h2"
          sx={{ textAlign: "center", my: 5, fontWeight: "bold" }}
          color="primary"
        >
          Klímák
        </Typography>
        <Typography
          variant="p"
          sx={{ mx: "auto",  fontWeight: "bold" }}
       
        >
          Az általunk forgalmazott klímák megbízható, minőségi készülékek, szükség esetén megfelelő alkatrész ellátással és szervíz háttérrel. Amennyiben nem találta meg az alább felsorolt termékek között az Önnek megfelelőt, keressen bizalommal és segítek kiválasztani az Önnek megfelelő készüléket.
        </Typography>
      </Grid>

      <Grid
        container
        xs={12}
        sx={{ mx: { xs: "30px", md: "150px", p:"0", mt: 10 } }}
        gap={5}
      >
        {airConditioners.map((item) => (
          <Grid item xs={10} sm={5}  lg={2} sx={{ mx: "auto" }} gap={5} key={item.name}>
            <MediaCard
              name={item.name}
              desciption={item.desciption}
              price={item.price}
              img={item.img}
              
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
