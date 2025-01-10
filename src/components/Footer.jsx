import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
        component="footer"
        sx={{
            textAlign: "center",
            padding: 2,
            backgroundColor: "primary.main",
            color: "white",
            marginTop: "auto",
        }}
        >
        <Typography variant="body2">2024 Sistema de Gestión de Exhortos.</Typography>
        </Box>
    );
};

export default Footer;
