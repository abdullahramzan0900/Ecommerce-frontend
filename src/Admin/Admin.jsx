import * as React from "react";
import { useState, useEffect } from "react";
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
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Posts from "./Posts";
import { Navigate, useNavigate } from "react-router-dom";

const pages = [
  {
    name: "MenCloths",
    api: "http://localhost:5000/ProductDetail",
  },
  {
    name: "WomenCloths",
    api: "http://localhost:5000/womenProducts",
  },
  {
    name: "Grocery",
    api: "http://localhost:5000/Grocery",
  },
  {
    name: "Electronics",
    api: "http://localhost:5000/electronics",
  },
];

function Admin() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [data, setdata] = useState([]);
  const [api, setapi] = useState([]);
  const [render, setrender] = useState(false);
  const navigate=useNavigate()
  // useEffect(() => {
  //   getData(api);
  // }, [render]);
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

  function renderfunc(data) {
    setrender(data);
  }
  async function getData(url) {
    console.log(api);
    setapi(url);
    const dataResponse = await fetch(url);
    console.log(dataResponse, "dataresponse");
    const dataArr = await dataResponse.json();
    setdata(dataArr);

    console.log(dataArr, "dataarr");
  }
  return (
    <>
      <div>
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
                  {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography  textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
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
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    onClick={() => {
                      setapi(page.api);
                      getData(page.api);
                      console.log(page.api);
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page?.name}
                  </Button>
                ))}
              </Box>
              <button className="button-admin-order" onClick={()=>{
                navigate('/orders')
              }}>Orders</button>
                <button className="button-admin-logout"  onClick={()=>{
                  localStorage.removeItem('admin');
                navigate('/login')
                }}>logout</button>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <div>
        <Posts
          data={data}
          api={api}
          setdata={setdata}
          setapi={setapi}

        />
      </div>
      
      
    </>
  );
}
export default Admin;
