import React from 'react';
import Footer from "../components/Footer";
import  Navbar  from "../components/Navbar";
import { Container } from "@mui/material";

function MainLayout({ children }) {
  return (
    <React.Fragment>
        <Navbar />
        <Container fixed style={{ paddingBottom: "64px" }}>
            {children}
        </Container>

        <Footer />
    </React.Fragment>
);
}

export default MainLayout;



