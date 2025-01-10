import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => {
    return (
        <AppBar
        position="static"
        sx={{
            backgroundColor: "primary.main",
            paddingX: { xs: 2, sm: 4 }, // Espaciado horizontal ajustado según el dispositivo
        }}
        >
        <Toolbar
            sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            }}
        >
            {/* Logo */}
            <Box
                component="img"
                src="/logo_poder_j.png" // Ruta al logo
                alt="Logo"
                sx={{
                    height: { xs: 60, sm: 80 }, // Tamaño del logo ajustado por pantalla
                    marginRight: 2,
                }}
            />

            {/* Título */}
            <Typography
                variant="h6"
                component="div"
                sx={{
                    fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" }, // Tamaño de texto responsivo
                    flexGrow: 1, // Toma todo el espacio disponible para alinear con el logo
                    textAlign: { xs: "center", sm: "left" }, // Centrado en pantallas pequeñas
                }}
                >
                Sistema de Gestión de Exhortos
            </Typography>
        </Toolbar>
        </AppBar>
    );
};

export default Header;
