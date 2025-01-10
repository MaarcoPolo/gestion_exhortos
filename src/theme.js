import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
        main: "#007bff",
        },
        secondary: {
        main: "#ff4081",
        },
        background: {
        default: "#f4f4f9",
        },
    },
    typography: {
        fontFamily: "Arial, sans-serif",
    },
});

export default theme;
