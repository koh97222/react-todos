import React from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <Container fixed>
      <div className="App">
        <TodoPage />
      </div>
    </Container>
  );
}

export default App;
