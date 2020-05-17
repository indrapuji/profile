import React from "react";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import Preview from "../components/Preview";

function Portfolio() {
	const pageTransition = {
		init: {
			x: -200,
			opacity: 0,
		},
		in: {
			x: 0,
			opacity: 1,
		},
		out: {
			x: -200,
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
			<h1 className="title-portfolio"> Portfolio</h1>
			<div className="preview-portfolio">
				<Row>
					<Col>
						<Preview />
						<Preview />
					</Col>
					<Col>
						<Preview />
						<Preview />
					</Col>
				</Row>
			</div>
		</motion.div>
	);
}
export default Portfolio;
