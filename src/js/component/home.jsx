import React from "react";
import Card from "./Card.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Card />
			<Card />
			<Card />
			<Card />
		</>
		
	);
};

export default Home;
