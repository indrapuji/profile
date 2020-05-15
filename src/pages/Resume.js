import React from "react";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";

function Resume() {
	const pageTransition = {
		in: {
			opacity: 1,
			y: 0,
		},
		out: {
			opacity: 0,
			y: "-100%",
		},
	};
	return (
		<motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
			<Container>
				<Navigation />
				<h1 className="text">Resume</h1>
			</Container>
		</motion.div>
	);
}

export default Resume;
