import React, { useState } from "react";
import {
    Box,
    TextField,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Typography,
    Button,
    Grid,
    IconButton,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Layout from "../components/Layout";
import BackButton from "../components/BackButton";

const Form = () => {
    const [formData, setFormData] = useState({
        expediente: "",
        materia: "",
        estado: "",
        municipio: "",
        materia2: "",
        partes: [{ nombre: "", aPaterno: "", aMaterno: "", genero: "", tipo: "", pMoral: false }],
        documentos: [{ archivo: null, tipoDoc: "" }],
    });

    const handleChange = (e, section = null, index = null) => {
        const { name, value, type, checked } = e.target;

        if (section) {
            const updatedSection = [...formData[section]];
            if (type === "checkbox") {
                updatedSection[index][name] = checked;
            } else if (type === "file") {
                updatedSection[index][name] = e.target.files[0];
            } else {
                updatedSection[index][name] = value;
            }
            setFormData({ ...formData, [section]: updatedSection });
        }
    };

    const addField = (section) => {
        const newField =
            section === "partes"
                ? { nombre: "", aPaterno: "", aMaterno: "", genero: "", tipo: "", pMoral: false }
                : { archivo: null, tipoDoc: "" };

        setFormData({
            ...formData,
            [section]: [...formData[section], newField],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", formData);
    };

    return (
        <Layout>
            <BackButton /> {/* Botón de regresar */}
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                width: "90%",
                margin: "0 auto",
                padding: 4,
                display: "flex",
                flexDirection: "column",
                gap: 4,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: "white",
            }}
        >
            <Typography variant="h4" align="center" sx={{ marginBottom: 3 }}>
                Envío de Exhorto
            </Typography>
            Los campos marcados con * son obligatorios

            {/* Primera fila: 2 elementos */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="* Expediente"
                        name="expediente"
                        value={formData.expediente}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel id="materia-label">* Materia</InputLabel>
                        <Select
                            labelId="materia-label"
                            name="materia"
                            value={formData.materia}
                            onChange={handleChange}
                            label="Materia"
                        >
                            <MenuItem value="civil">Civil</MenuItem>
                            <MenuItem value="penal">Penal</MenuItem>
                            <MenuItem value="laboral">Laboral</MenuItem>
                            <MenuItem value="familiar">Familiar</MenuItem>
                            <MenuItem value="mercantil">Mercantil</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            {/* Segunda fila: 3 elementos */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel id="estado-label">* Estado</InputLabel>
                        <Select
                            labelId="estado-label"
                            name="estado"
                            value={formData.estado}
                            onChange={handleChange}
                            label="Estado"
                        >
                            <MenuItem value="Puebla">Puebla</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel id="municipio-label">* Municipio</InputLabel>
                        <Select
                            labelId="municipio-label"
                            name="municipio"
                            value={formData.municipio}
                            onChange={handleChange}
                            label="Municipio"
                        >
                            <MenuItem value="puebla">Puebla</MenuItem>
                            <MenuItem value="cholula">Cholula</MenuItem>
                            <MenuItem value="tepeaca">Tepeaca</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel id="materia-label">* Materia</InputLabel>
                        <Select
                            labelId="materia-label"
                            name="materia"
                            value={formData.materia}
                            onChange={handleChange}
                            label="Materia"
                        >
                            <MenuItem value="familiar">Familiar</MenuItem>
                            <MenuItem value="mercantil">Mercantil</MenuItem>
                            <MenuItem value="constitucional">Constitucional</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            {/* Sección PARTES */}
            <Box sx={{ textAlign: "left" }}>
                <Typography variant="h5" sx={{ display: "inline", marginRight: 1 }}>
                    Partes
                </Typography>
                <IconButton color="primary" onClick={() => addField("partes")}>
                    <AddCircleOutlineIcon />
                </IconButton>
            </Box>
            {formData.partes.map((parte, index) => (
                <Box key={index} sx={{ marginBottom: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="* Nombre"
                                name="nombre"
                                value={parte.nombre}
                                onChange={(e) => handleChange(e, "partes", index)}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Apellido Paterno"
                                name="aPaterno"
                                value={parte.aPaterno}
                                onChange={(e) => handleChange(e, "partes", index)}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Apellido Materno"
                                name="aMaterno"
                                value={parte.aMaterno}
                                onChange={(e) => handleChange(e, "partes", index)}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id={`genero-label-${index}`}>Género</InputLabel>
                                <Select
                                    labelId={`genero-label-${index}`}
                                    name="genero"
                                    value={parte.genero}
                                    onChange={(e) => handleChange(e, "partes", index)}
                                    label="Género"
                                >
                                    <MenuItem value="masculino">Masculino</MenuItem>
                                    <MenuItem value="femenino">Femenino</MenuItem>
                                    <MenuItem value="otro">Otro</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id={`tipo-label-${index}`}>Tipo</InputLabel>
                                <Select
                                    labelId={`tipo-label-${index}`}
                                    name="tipo"
                                    value={parte.tipo}
                                    onChange={(e) => handleChange(e, "partes", index)}
                                    label="Tipo"
                                >
                                    <MenuItem value="demandante">Demandante</MenuItem>
                                    <MenuItem value="demandado">Demandado</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={parte.pMoral}
                                        onChange={(e) => handleChange(e, "partes", index)}
                                        name="pMoral"
                                        color="primary"
                                    />
                                }
                                label="Persona Moral"
                            />
                        </Grid>
                    </Grid>
                </Box>
            ))}

            {/* Sección DOCUMENTOS */}
            <Box sx={{ textAlign: "left", marginTop: 4 }}>
                <Typography variant="h5" sx={{ display: "inline", marginRight: 1 }}>
                    Documentos
                </Typography>
                <IconButton color="primary" onClick={() => addField("documentos")}>
                    <AddCircleOutlineIcon />
                </IconButton>
            </Box>
            {formData.documentos.map((documento, index) => (
                <Box key={index} sx={{ marginBottom: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" component="label" fullWidth>
                                Subir Archivo
                                <input
                                    type="file"
                                    hidden
                                    name="archivo"
                                    onChange={(e) => handleChange(e, "documentos", index)}
                                />
                            </Button>
                            {documento.archivo && (
                                <Typography variant="body2" sx={{ marginTop: 1 }}>
                                    {documento.archivo.name}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel id={`tipo-documento-label-${index}`}>
                                    Tipo de Documento
                                </InputLabel>
                                <Select
                                    labelId={`tipo-documento-label-${index}`}
                                    name="tipoDoc"
                                    value={documento.tipoDoc}
                                    onChange={(e) => handleChange(e, "documentos", index)}
                                    label="Tipo de Documento"
                                >
                                    <MenuItem value="acta">Acuerdo</MenuItem>
                                    <MenuItem value="contrato">Exhorto</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
            ))}
            <Box
                sx={{
                    display: "flex", // Los botones estarán en una fila
                    justifyContent: "center", // Centrados horizontalmente
                    alignItems: "center", // Alineados verticalmente
                    gap: 2, // Espacio entre los botones
                    marginTop: 3, // Separación vertical respecto a otros elementos
                }}
                >
                <Button type="button" variant="contained" color="rojo" size="large">
                    Cancelar
                </Button>
                <Button type="submit" variant="contained" color="primary" size="large">
                    Guardar
                </Button>
                <Button type="submit" variant="contained" color="secondary" size="large">
                    Enviar
                </Button>
            </Box>
        </Box>
        </Layout>
    );
};

export default Form;
