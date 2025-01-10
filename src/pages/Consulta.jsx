import React from "react";
import { Box, Typography } from "@mui/material";
import Tabla from "../components/Tabla";
import BackButton from "../components/BackButton";
import Layout from "../components/Layout";

const Consulta = () => {
  // Datos estáticos para la tabla
    const columns = [
        { field: "id", headerName: "ID", align: "center" },
        { field: "nombre", headerName: "Nombre", align: "left" },
        { field: "apellido", headerName: "Apellido", align: "left" },
        { field: "genero", headerName: "Género", align: "center" },
        { field: "tipo", headerName: "Tipo", align: "left" },
    
    ];

    const data = [
        { id: 1, nombre: "Juan", apellido: "Pérez", genero: "Masculino", tipo: "Demandante" },
        { id: 2, nombre: "María", apellido: "Gómez", genero: "Femenino", tipo: "Demandado" },
        { id: 3, nombre: "Luis", apellido: "Martínez", genero: "Masculino", tipo: "Testigo" },
    ];

    return (
        <Layout>
            <Box sx={{ padding: 4 }}>
                <BackButton /> {/* Botón de regresar */}
                <Typography variant="h4" sx={{ marginBottom: 3 }}>
                    Consulta de Información
                </Typography>
                <Tabla columns={columns} data={data} title="Registros" />
            </Box>
        </Layout>
    );
};

export default Consulta;
