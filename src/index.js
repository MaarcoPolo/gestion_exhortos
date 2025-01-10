import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

// Llama a reportWebVitals para medir métricas de rendimiento
reportWebVitals(console.log); // Puedes reemplazar console.log con otra función para manejar los datos

