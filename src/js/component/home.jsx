import React from "react";
import Stack from "react-bootstrap/Stack";
import Carta from "./Card.jsx";
import WelcomeComponent from "./Jumbotron.jsx"; 

function HorizontalExample() {
  return (
    <div className="container"> 
     
      <WelcomeComponent />

      <div style={{ marginTop: '10px' }}>
        <Stack direction="horizontal" gap={3}>
          <Carta />
          <Carta />
          <Carta />
          <Carta />
        </Stack>
      </div>
    </div>
  );
}

export default HorizontalExample;
