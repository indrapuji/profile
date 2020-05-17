import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RiSettings4Line } from "react-icons/ri";
import { FaRegEye, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Navigation() {
	const history = useHistory();
	function home() {
		history.push("/profile");
	}
	function about() {
		history.push("/profile/about");
	}
	function resume() {
		history.push("/profile/resume");
	}
	function portfolio() {
		history.push("/profile/portfolio");
	}
	return (
		<>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				style={{ backgroundColor: "black" }}
				sticky="top"
			>
				<Navbar>
					<Nav className="navbar">
						<motion.a
							whileHover={{ color: "#45fc03", scale: 1.5 }}
							href="https://twitter.com/indra_pn"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitter size="20" />
						</motion.a>
					</Nav>
					<Nav className="navbar">
						<motion.a
							whileHover={{ color: "#45fc03", scale: 1.5 }}
							href="https://www.instagram.com/indrapuji/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram size="20" />
						</motion.a>
					</Nav>
					<Nav className="navbar">
						<motion.a
							whileHover={{ color: "#45fc03", scale: 1.5 }}
							href="https://www.linkedin.com/in/indra-puji-novirwan/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin size="20" />
						</motion.a>
					</Nav>
				</Navbar>
				<Navbar.Toggle />
				<Navbar.Collapse
					className="justify-content-end mx-3"
					style={{ color: "grey" }}
				>
					<motion.div
						className="navbar mr-5"
						whileHover={{ color: "#45fc03", scale: 1.5 }}
						onClick={home}
					>
						<AiOutlineHome size="30" />
					</motion.div>
					<motion.div
						className="navbar mr-5"
						whileHover={{ color: "#45fc03", scale: 1.5 }}
						onClick={about}
					>
						<BsPerson size="30" />
					</motion.div>
					<motion.div
						className="navbar mr-5"
						whileHover={{ color: "#45fc03", scale: 1.5 }}
						onClick={resume}
					>
						<RiSettings4Line size="30" />
					</motion.div>
					<motion.div
						className="navbar mr-5"
						whileHover={{ color: "#45fc03", scale: 1.5 }}
						onClick={portfolio}
					>
						<FaRegEye size="30" />
					</motion.div>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}
export default Navigation;
