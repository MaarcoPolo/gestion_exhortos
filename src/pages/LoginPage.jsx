import React from "react";
import LoginForm from "../components/LoginForm";
import { Box, Typography } from "@mui/material";

const LoginPage = ({ onLogin }) => {
    return (
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#f4f4f9",
            padding: 2,
        }}
        >
        {/* Imagen del logo (arriba del título) */}
        <Box
            component="img"
            src="/logo_poder_j.png" // Ruta de la imagen
            alt="Logo del sistema"
            sx={{
            width: { xs: "600px", sm: "700px" }, // Tamaño más grande
            marginBottom: 2,
            }}
        />

        {/* Título del sistema */}
        <Typography
            variant="h4"
            sx={{
            marginBottom: 2,
            fontWeight: "bold",
            color: "primary.main",
            textAlign: "center",
            }}
        >
            SISTEMA DE GESTIÓN DE EXHORTOS
        </Typography>

        {/* Formulario de inicio de sesión */}
        <LoginForm onLogin={onLogin} />
        </Box>
    );
};

export default LoginPage;
