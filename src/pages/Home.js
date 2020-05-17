import React from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
	const history = useHistory();
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
	function about() {
		history.push("/profile/about");
	}
	return (
		<motion.div
			initial="init"
			animate="in"
			exit="out"
			variants={pageTransition}
		>
			<div className="title">
				<h1>Hello, my name is</h1>
				<motion.h1
					whileHover={{ color: "white" }}
					animate={{ y: -5, opacity: 0.5 }}
					transition={{
						yoyo: Infinity,
						duration: 0.3,
						ease: "easeInOut",
					}}
					className="title-name"
					onClick={about}
				>
					Indra Puji Novirwan
				</motion.h1>
				<h1>Junior Programmer...</h1>
				<p className="note">Full Stack Javascript Developer / Freelancer</p>
			</div>
		</motion.div>
	);
}
export default Home;
