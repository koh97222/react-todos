import React from "react";
import WrapRouter from "./components/WrapRouter";
import "./App.css";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container fixed>
      <WrapRouter />
    </Container>
  );
}

export default App;
