import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  // Routes, Route 
} from "react-router-dom";
import Routes from './routes'
import { ChakraProvider } from "@chakra-ui/react";
// import Home from "./pages/Home";
// import App from './App'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);


