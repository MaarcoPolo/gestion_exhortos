import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const MainView = () => {
    const navigate = useNavigate();

    return (
        <Layout>
        <Box
            sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: 3,
            backgroundColor: "background.default",
            }}
        >
            <Typography variant="h4" gutterBottom>
            Bienvenido al Sistema de Gestión de Exhortos
            </Typography>

            <Grid container spacing={4} sx={{ maxWidth: 600 }}>
            {/* Botón de Formulario de Registro */}
            <Grid item xs={12} sm={6}>
                <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={() => navigate("/formulario")}
                sx={{ height: 80 }}
                >
                Formulario de Registro
                </Button>
            </Grid>

            {/* Botón de Consulta */}
            <Grid item xs={12} sm={6}>
                <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                onClick={() => navigate("/consulta")}
                sx={{ height: 80 }}
                >
                Consulta
                </Button>
            </Grid>

            {/* Botón de Seguimiento */}
            <Grid item xs={12} sm={6}>
                <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                onClick={() => navigate("/seguimiento")}
                sx={{ height: 80 }}
                >
                Seguimiento
                </Button>
            </Grid>

            {/* Botón de Respuesta */}
            <Grid item xs={12} sm={6}>
                <Button
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
                onClick={() => navigate("/respuesta")}
                sx={{ height: 80 }}
                >
                Respuesta
                </Button>
            </Grid>
            </Grid>
        </Box>
        </Layout>
    );
};

export default MainView;
