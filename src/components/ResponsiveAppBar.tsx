import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { PineConeIcon, BascketIcon, LoginIcon } from "./icons/Icons";

const pages = ["нүүр", "хоолны цэс", "хүргэлтийн цэс"];

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "#FFF" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PineConeIcon />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "ActiveBorder",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "aqua" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: 700,
                  "&:hover": {
                    color: "#18BA51",
                  },
                  fontSize: "14px",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              gap: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "solid 1px",
                borderColor: "black",
                borderRadius: "8px",
              }}
            >
              <IconButton type="button" sx={{ p: "8px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Хайх"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Box>
            <Box
              sx={{
                width: "102px",
                padding: "8px 16px",
                gap: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <BascketIcon />
              <Typography
                variant="h1"
                component={"h1"}
                textAlign="center"
                sx={{ fontSize: "14px", fontWeight: 700, color: "black" }}
              >
                Сагс
              </Typography>
            </Box>
            <Box
              sx={{
                width: "150px",
                padding: "8px 16px",
                gap: "8px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LoginIcon />
              <Typography
                textAlign="center"
                sx={{
                  fontSize: "14px",
                  fontWeight: 700,
                  display: "flex",
                  color: "black",
                }}
              >
                Нэвтрэх
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
