import React from "react";
import Carta from "./Card.jsx";



//create your first component
import Stack from 'react-bootstrap/Stack';

function HorizontalExample() {
  return (
    <Stack direction="horizontal" gap={3} >
      <Carta />
	  <Carta />
	  <Carta />
	  <Carta />
    </Stack>
  );
}

export default HorizontalExample;