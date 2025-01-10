import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FormPage from "./pages/FormPage";
import MainView from "./pages/MainView";
import Consulta from "./pages/Consulta";


const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#ff4081",
    },
    rojo:{
      main: "#f44336",
    },
    verde:{
      main: "#00674F"
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LoginWithRedirect />} />
          <Route path="/main" element={<MainView />} />
          <Route path="/formulario" element={<FormPage />} />
          <Route path="/consulta" element={<Consulta />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

const LoginWithRedirect = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/main");
  };

  return <LoginPage onLogin={handleLogin} />;
};

export default App;
