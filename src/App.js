import React from "react";
import "./App.css";

import { Container } from "react-bootstrap";
import Rectangle from "./components/Rectangle/index";

function App() {
  const renderRectangle = value => {
    const blueBg = "#282f54";
    const greenBg = "#285428";
    var rectangleId = value + 1;

    if (rectangleId % 3 === 0) {
      return (
        <Rectangle value={rectangleId} style={{ backgroundColor: blueBg }} />
      );
    } else {
      return (
        <Rectangle value={rectangleId} style={{ backgroundColor: greenBg }} />
      );
    }
  };

  return (
    <Container>
      {[...Array(15)].map((key, value) => renderRectangle(value))}
    </Container>
  );
}

export default App;
