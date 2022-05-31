import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему
// import { MuiThemeProvider } from "@material-ui/core/styles";
import { AuthProvider } from './AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <MuiThemeProvider theme={theme}> */}
      <AuthProvider>
        <App />
      </AuthProvider>
    {/* </MuiThemeProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();