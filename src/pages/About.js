import React from "react";
import { motion } from "framer-motion";
import { Card } from "react-bootstrap";

function About() {
	const pageTransition = {
		init: {
			x: -500,
		},
		in: {
			x: 0,
		},
		out: {
			x: "100vw",
			opacity: 0,
		},
	};
	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delay: 1,
				when: "beforeChildren",
				staggerChildren: 0.1,
			},
		},
	};
	const item = {
		hidden: { y: 100, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};
	return (
		<motion.div
			initial="init"
			animate="in"
			exit="out"
			variants={pageTransition}
		>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 3 }}
				className="title-about"
			>
				About me
			</motion.h1>
			<motion.h4
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 5 }}
				className="sub-about"
			>
				Self-motifated, organized, and competent Junior Programmer.
			</motion.h4>
			<Card style={{ backgroundColor: "black" }} className="card-about">
				<motion.div variants={container} initial="hidden" animate="visible">
					<motion.div variants={item}>
						<Card.Body>
							<Card.Text>
								Started my programming career 6 month ago. I have successfully
								completed the boothcamp school in jakarta called Hacktiv8. This
								school has opened a good opportunities for my professional
								development.
							</Card.Text>
							<Card.Text>
								Fueled by high energy levels and boundless enthusiasm, I’m
								easily inspired and more then willing to follow my fascinations
								wherever they take me. I’m passionate, expressive, spirit with a
								natural ability to entertain and inspire. I’m never satisfied to
								just come up with ideas. Instead I have an almost impulsive need
								to act on them.
							</Card.Text>
							<Card.Text>
								I’m constantly enhancing my knowledge and I aim to learn more
								day after day
							</Card.Text>
						</Card.Body>
					</motion.div>
				</motion.div>
			</Card>
		</motion.div>
	);
}
export default About;
