import React from "react";
// import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import Router from "next/router";
import { useState, useEffect } from "react";
import Widget from "./Widget";
const navs = [
  <Link href="/" textDecoration="none">
    <Typography
      variant="h6"
      style={{
        margin: "0 10px",
        cursor: "pointer",
        color: "#000000 ",
        paddingRight: "20px",
        textDecoration: "none",
        "&:hover": {
          color: "#000000",
          textDecoration: "none",
        },
        "&:visited": {
          color: "#000000",
          textDecoration: "none",
        },
      }}
    >
      Home
    </Typography>
  </Link>,
  <Link href="/dealer">
  <Typography
      variant="h6"
      style={{
        margin: "0 10px",
        cursor: "pointer",
        color: "#000000 ",
        paddingRight: "20px",
        textDecoration: "none",
        "&:hover": {
          color: "#000000",
          textDecoration: "none",
        },
        "&:visited": {
          color: "#000000",
          textDecoration: "none",
        },
      }}
    >
      dealer
      </Typography>
  </Link>,
  <Link href="/about" textDecoration="none">
  <Typography
    variant="h6"
    style={{
      margin: "0 10px",
      cursor: "pointer",
      color: "#000000 ",
      paddingRight: "20px",
      textDecoration: "none",
      "&:hover": {
        color: "#000000",
        textDecoration: "none",
      },
      "&:visited": {
        color: "#000000",
        textDecoration: "none",
      },
    }}
  >
    about
  </Typography>
</Link>,
 <Typography
   variant="h6"
   style={{
     margin: "0 10px",
     cursor: "pointer",
     color: "#000000 ",
     paddingRight: "20px",
     textDecoration: "none",
     "&:hover": {
       color: "#000000",
       textDecoration: "none",
     },
     "&:visited": {
       color: "#000000",
       textDecoration: "none",
     },
   }}
 >
   <Widget/>
 </Typography>,
];
const pages = [
  <Link href="/" textDecoration="none">
    <Typography
      variant="h6"
      style={{
        margin: "0 10px",
        cursor: "pointer",
        color: "#000000 ",
        paddingRight: "20px",
        textDecoration: "none",
        "&:hover": {
          color: "#000000",
          textDecoration: "none",
        },
        "&:visited": {
          color: "#000000",
          textDecoration: "none",
        },
      }}
    >
      Home
    </Typography>
  </Link>,
  <Link href="/dealer">
  <Typography
      variant="h6"
      style={{
        margin: "0 10px",
        cursor: "pointer",
        color: "#000000 ",
        paddingRight: "20px",
        textDecoration: "none",
        "&:hover": {
          color: "#000000",
          textDecoration: "none",
        },
        "&:visited": {
          color: "#000000",
          textDecoration: "none",
        },
      }}
    >
      dealer
      </Typography>
  </Link>,
  <Link href="/about" textDecoration="none">
  <Typography
    variant="h6"
    style={{
      margin: "0 10px",
      cursor: "pointer",
      color: "#000000 ",
      paddingRight: "20px",
      textDecoration: "none",
      "&:hover": {
        color: "#000000",
        textDecoration: "none",
      },
      "&:visited": {
        color: "#000000",
        textDecoration: "none",
      },
    }}
  >
    about
  </Typography>
</Link>,
 <Typography
   variant="h6"
   style={{
     margin: "0 10px",
     cursor: "pointer",
     color: "#000000 ",
     paddingRight: "20px",
     textDecoration: "none",
     "&:hover": {
       color: "#000000",
       textDecoration: "none",
     },
     "&:visited": {
       color: "#000000",
       textDecoration: "none",
     },
   }}
 >
   <Widget/>
 </Typography>,
];
function Navbar() {



  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
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
    <div>
      <AppBar position="static" color="inherit">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              brom.ru
            </Typography>
  
            <Typography
              variant="body2"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              best place to sale
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
                {navs.map((nav) => (
                  <MenuItem key={nav} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{nav}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              brom.ru
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
