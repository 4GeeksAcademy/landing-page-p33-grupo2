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
      <div style={{marginTop:"5rem", marginBottom:"5rem"}}>
      <WelcomeComponent />
      <div style={{ marginTop: '10px' }}>
        <div className="d-flex  justify-content-between flex-wrap">
          <Carta />
          <Carta />
          <Carta />
          <Carta />
        </div>
      </div>
      </div>
      <Footer/>

    </div>
  );
}

export default HorizontalExample;
