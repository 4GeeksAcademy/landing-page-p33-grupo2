import React from "react";
import Stack from "react-bootstrap/Stack";
import Navbar from "./Navbar.jsx";
import Carta from "./Card.jsx";
import WelcomeComponent from "./Jumbotron.jsx"; 
import Footer from "./Footer.jsx"

function HorizontalExample() {
  return (
    <div className="container"> 

      <Navbar/>
      <WelcomeComponent />
      <div style={{ marginTop: '10px' }}>
        <Stack direction="horizontal" gap={3}>
          <Carta />
          <Carta />
          <Carta />
          <Carta />
        </Stack>
      </div>
      <Footer/>

    </div>
  );
}

export default HorizontalExample;
