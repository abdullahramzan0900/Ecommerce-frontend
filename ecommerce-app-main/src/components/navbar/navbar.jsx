import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CategoriesBar from "../categoriesbar/categoriesbar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { requests } from "../../requests";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useFetcher from "../../fetcher";
const pages = [
  {
    name: "Electronics",
    link: `/electronics`,
  },
  {
    name: "Grocery",
    link: `/jewelery`,
  },
  {
    name: "Mens-cloths",
    link: `/men'sclothing`,
  },
  {
    name: "Women-Cloths",
    link: `/women'sclothing`,
  },
];
var x;
const settings = ["Profile", "Account", "Dashboard", "Logout"];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [localdata, Setlocaldata] = useState("");
  const [categories] = useFetcher(requests.categories);
  const navigate = useNavigate();
  useEffect(() => {
    var x = localStorage.getItem("name");
    Setlocaldata(x);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                {pages?.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link
                      style={{
                        color: "black",
                        textDecoration: "none",
                        margin: "5px",
                      }}
                      to={page.link}
                    >
                      {page.name}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages?.map((page, index) => (
                <Link
                  style={{
                    color: "white",
                    textDecoration: "none",
                    margin: "5px",
                  }}
                  className="page-name"
                  to={page.link}
                >
                  {page.name}
                </Link>
              ))}
            </Box>
            {localdata ? (
              <>
              
           
              <Button
                onClick={() => {
                  localStorage.removeItem("name");
                  Setlocaldata(x);
                }}
                style={{
                  background: "white",
                  çolor: "white",
                  margin:"10px"
                }}
              >
                Log-out
                              </Button>
{/* <div style={{
  height:"50px",
  width:"50px",
  borderRadius:'50%',
  background:"white",
  color:'black',
  padding:"5px"
  
}}>
  aaa
  </div> */}

              </>
            ) : (
              <Button
                style={{
                  background: "white",
                  çolor: "white",
                }}
                onClick={() => {
                  navigate("/Login");
                }}
              >
                Log-in
              </Button>
            )}



            <Link to={"/my-cart"} className="link">
              <ShoppingCartIcon
                style={{
                  //  marginLeft:'30px',
                  cursor: "pointer",
                }}
              />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <CategoriesBar categories={categories} /> */}
    </>
  );
}
export default ResponsiveAppBar;
