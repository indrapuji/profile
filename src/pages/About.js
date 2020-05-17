import React from "react";
import { motion } from "framer-motion";

function About() {
	const pageTransition = {
		init: {
			x: -500,
		},
		in: {
			x: 0,
		},
		out: {
			x: 1000,
			opacity: 0,
		},
	};
	return (
		<motion.div
			initial="init"
			animate="in"
			exit="out"
			variants={pageTransition}
		>
			<h1 className="title"> Halaman About</h1>
		</motion.div>
	);
}
export default About;
