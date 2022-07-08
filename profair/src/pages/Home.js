import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

export default function Home() {
  const homeContent = [
    {
      name: "Ingyenes felmérés",

      text: "Budapesten és Pest megyében nem számolunk fel kiszállási díjat a felmérésért.",
    },
    {
      name: "100% Garancia",
      text: "Az elvégzett munkánkra garanciát vállalunk",
    },
    {
      name: "Gyorsaság",
      text: "Rövid határidőn belül elvégezzük a megrendelt munkát.",
    },
    {
      name: "Minőség",
      text: "Az általunk forgalmazott klímák megbízható, minőségi készülékek, szükség esetén megfelelő alkatrész ellátással és szervíz háttérrel.",
    },
  ];

  return (
    <>
      <Typography variant="h1">Klíma és villanyszerelés</Typography>
      <Typography variant="h2" sx={{ textAlign: "center", my: 5 }}>
        Miért épp minket válasszon?
      </Typography>
      <Box>
        {homeContent.map((item) => (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            key={item.name}
          >
            <Typography variant="h4">{item.name}</Typography>
            <Typography variant="h6">{item.text}</Typography>
          </Box>
        ))}
      </Box>
      <Typography variant="h3">Bízza a profikra, bízza a ProfAirre!</Typography>
    </>
  );
}
