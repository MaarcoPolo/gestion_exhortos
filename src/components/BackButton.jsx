import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BackButton = ({ to = "/main", label = "Regresar" }) => {
    const navigate = useNavigate();

    return (
        <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => navigate(to)}
        sx={{
            width: 10, // El ancho se ajusta al contenido
            paddingX: 8, // Espaciado horizontal (opcional)
            height: 50, // Altura más pequeña que el botón original
            fontSize: "1rem", // Tamaño de fuente ajustado
            marginBottom: 3, // Espaciado inferior
        }}
        >
        {label}
        </Button>
    );
};

export default BackButton;
