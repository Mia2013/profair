import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@material-ui/core/Link";

const pages = [
  {
    name: "Kezdőlap",
    path: "/",
  },

  {
    name: "Klímák",
    path: "klimak",
  },
  {
    name: "Szolgáltatások",
    path: "szolgaltatasok",
  },
  {
    name: "Árak",
    path: "arak",
  },
  {
    name: "Kapcsolat",
    path: "kapcsolat",
  },
];

export default function SecondLineAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container maxWidth="100%">
      <Toolbar
        disableGutters
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  component={Link}
                  href={page.path}
                  color="inherit"
                >
                  {page.name}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Typography
          sx={{
            typography: { xs: "h6", md: "h5", lg: "h5" },
            display: { sm: "none", md: "inline" },
          }}
        >
          Klíma- és villanyszerelés
        </Typography>
        <Box
          sx={{
            flexGrow: 2,
            display: { xs: "none", sm: "flex" },
            justifyContent: "flex-end",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page.name}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              component={Link}
              href={page.path}
              color="inherit"
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Container>
  );
}
