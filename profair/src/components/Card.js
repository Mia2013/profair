import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MediaCard({ name, img, description, price }) {
  return (
    <Card data-aos="flip-left">
      <CardActionArea>
        <CardMedia
          component="img"
          image={`${process.env.PUBLIC_URL}/assets/airConditioners/${img}.jpg`}
          alt={name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ minHeight: "96px" }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography
            gutterBottom
            variant="p"
            component="div"
            color="primary"
            fontWeight="bolder"
          >
            {new Intl.NumberFormat("hu-HU", {
              style: "currency",
              currency: "HUF",
              maximumFractionDigits: 0,
            }).format(price)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
