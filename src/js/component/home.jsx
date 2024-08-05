import React from "react";
import Carta from "./Card.jsx";



//create your first component
import Stack from 'react-bootstrap/Stack';

function HorizontalExample() {
  return (
	<div className="card-container">
		<Stack direction="horizontal" gap={4} >
			<Carta />
			<Carta />
			<Carta />
			<Carta />
		</Stack>
	</div>
  );
}

export default HorizontalExample;