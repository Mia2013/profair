import HomeContent from "./HomeContent";
import PaymentsIcon from '@mui/icons-material/Payments';
import BuildIcon from '@mui/icons-material/Build';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import StarIcon from '@mui/icons-material/Star';

export default function Home() {
  const homeItems = [
    {
      name: "Ingyenes felmérés",
      text: "Budapesten és Pest megyében nem számolunk fel kiszállási díjat a felmérésért.",
      icon: <PaymentsIcon color="primary"  sx={{ fontSize: 100 }}/>,
    },
    {
      name: "100% Garancia",
      text: "Az elvégzett munkánkra garanciát vállalunk.",
      icon: <BuildIcon color="primary"  sx={{ fontSize: 100 }}/>,
    },
    {
      name: "Gyorsaság",
      text: "Rövid határidőn belül elvégezzük a megrendelt munkát.",
      icon: <AccessAlarmIcon color="primary"  sx={{ fontSize: 100 }}/>,
    },
    {
      name: "Minőség",
      text: "Az általunk forgalmazott klímák minőségi készülékek, szükség esetén megfelelő szervíz háttérrel.",
      icon: <StarIcon color="primary"  sx={{ fontSize: 100 }}/>,
    },
  ];

  return (
      <HomeContent items={homeItems} />
  );
}
