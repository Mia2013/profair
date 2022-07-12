import React, { Suspense } from "react";
import Loading from "../../components/Loading";
const HomeContent = React.lazy(() => import("./HomeContent"));

export default function Home() {
  const homeContent = [
    {
      name: "Ingyenes felmérés",
      text: "Budapesten és Pest megyében nem számolunk fel kiszállási díjat a felmérésért.",
      icon: "",
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
    <Suspense fallback={<Loading />}>
      <HomeContent content={homeContent} />
    </Suspense>
  );
}
