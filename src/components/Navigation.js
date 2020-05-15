import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

function Navigation(props) {
	const history = useHistory();

	function profile() {
		history.push("/profile");
	}
	function about() {
		history.push("/profile/about");
	}
	function resume() {
		history.push("/profile/resume");
	}
	function portofolio() {
		history.push("/profile/portofolio");
	}
	function overColor(e) {
		e.target.style.color = "#45fc03";
	}
	function leaveColor(e) {
		e.target.style.color = "lightgrey";
	}
	return (
		<>
			{props.isAnimate && (
				<motion.ul
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 10 }}
					className="homeNav"
				>
					<li
						onMouseOut={leaveColor}
						onMouseEnter={overColor}
						onClick={profile}
					>
						Home
					</li>
					<li onMouseOut={leaveColor} onMouseEnter={overColor} onClick={about}>
						About
					</li>
					<li onMouseOut={leaveColor} onMouseEnter={overColor} onClick={resume}>
						Resume
					</li>
					<li
						onMouseOut={leaveColor}
						onMouseEnter={overColor}
						onClick={portofolio}
					>
						Portofolio
					</li>
				</motion.ul>
			)}
			{!props.isAnimate && (
				<motion.ul
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="allNav"
				>
					<li
						onMouseOut={leaveColor}
						onMouseEnter={overColor}
						onClick={profile}
					>
						Home
					</li>
					<li onMouseOut={leaveColor} onMouseEnter={overColor} onClick={about}>
						About
					</li>
					<li onMouseOut={leaveColor} onMouseEnter={overColor} onClick={resume}>
						Resume
					</li>
					<li
						onMouseOut={leaveColor}
						onMouseEnter={overColor}
						onClick={portofolio}
					>
						Portofolio
					</li>
				</motion.ul>
			)}
		</>
	);
}
export default Navigation;
