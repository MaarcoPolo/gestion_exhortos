import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const LoginForm = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        usuario: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.usuario === "admin" && formData.password === "password") {
        // Aquí puedes conectar con tu API de autenticación
        console.log("Inicio de sesión exitoso:", formData);
        onLogin(); // Notifica al componente padre
        } else {
        alert("Por favor, completa todos los campos.");
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                maxWidth: 400,
                margin: "0 auto",
                padding: 3,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "white",
            }}
        >
            <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
                Iniciar Sesión
            </Typography>

            <TextField
                label="Usuario"
                type="text"
                name="usuario"
                value={formData.usuario}
                onChange={handleChange}
                variant="outlined"
                fullWidth
            />
            <TextField
                label="Contraseña"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                fullWidth
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ marginTop: 2 }}
                >
                Iniciar Sesión
            </Button>
        </Box>
    );
};

export default LoginForm;
