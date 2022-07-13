import HomeContent from "./HomeContent";

export default function Home() {
  const homeContent = [
    {
      name: "Ingyenes felmérés",
      text: "Budapesten és Pest megyében nem számolunk fel kiszállási díjat a felmérésért.",
      icon: "bi bi-coin",
    },
    {
      name: "100% Garancia",
      text: "Az elvégzett munkánkra garanciát vállalunk.",
      icon: "",
    },
    {
      name: "Gyorsaság",
      text: "Rövid határidőn belül elvégezzük a megrendelt munkát.",
      icon: "",
    },
    {
      name: "Minőség",
      text: "Az általunk forgalmazott klímák minőségi készülékek, szükség esetén megfelelő szervíz háttérrel.",
      icon: "",
    },
  ];

  return (
      <HomeContent content={homeContent} />
  );
}
