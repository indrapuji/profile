import React from "react";
import Navigation from "../components/Navigation";
// import { motion } from "framer-motion";
import { Container } from "react-bootstrap";

function Resume() {
	return (
		<div>
			<Container>
				<Navigation />
				<h1 style={{ fontSize: "3rem", color: "white", paddingTop: "1%" }}>
					Indra Puji Novirwan
				</h1>
			</Container>
		</div>
	);
}

export default Resume;
