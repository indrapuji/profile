import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";

function Home() {
	const pageTransition = {
		in: {
			opacity: 1,
		},
		out: {
			opacity: 0,
		},
	};
	return (
		<motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 5 }}
				className="socialGroup"
			>
				<FaTwitter color="lightgrey" size="30" className="socialIcon" />
				<FaInstagram color="lightgrey" size="30" className="socialIcon" />
				<FaLinkedin color="lightgrey" size="30" className="socialIcon" />
			</motion.div>
			<motion.h1
				initial={{ y: -200 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.5 }}
				className="title"
			>
				Indra Puji Novirwan
			</motion.h1>
			<motion.h3
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 5 }}
				className="subtitle"
			>
				Full Stack Javascript Developer
			</motion.h3>
			<Navigation isAnimate={true} />
		</motion.div>
	);
}

export default Home;
