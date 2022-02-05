import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
    return (
        <footer
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#BCBCBC",
                width: "100%",
                color: "#fff",
                height: "64px",
                marginTop: "auto",
            }}
        >
            <Typography variant="h6">
                 Contacts: 
                <a
                    href="https://vk.com/nilev"
                    rel="noreferrer"
                    target="_blank"
                    style={{
                        color: "#000000 ",
                        textDecoration: "none",
                        "&:hover": {
                            color: "#000000 ",
                            textDecoration: "none",
                        },
                        "&:visited": {
                            color: "#000000 ",
                        },
                    }}
                >
                     Vk,  
                </a>
                <a
                    href="https://t.me/NikeLevis"
                    rel="noreferrer"
                    target="_blank"
                    style={{
                        color: "#000000 ",
                        textDecoration: "none",
                        "&:hover": {
                            color: "#000000 ",
                            textDecoration: "none",
                        },
                        "&:visited": {
                            color: "#000000 ",
                        },
                    }}
                >
                     Telegram
                </a>
            </Typography>
        </footer>
    );
};

export default Footer;