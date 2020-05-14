import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
	function overColor(e) {
		e.target.style.color = "blue";
	}
	function leaveColor(e) {
		e.target.style.color = "lightgrey";
	}
	return (
		<>
			<div className="socialGroup">
				<FaTwitter color="lightgrey" size="30" className="socialIcon" />
				<FaInstagram color="lightgrey" size="30" className="socialIcon" />
				<FaLinkedin color="lightgrey" size="30" className="socialIcon" />
			</div>
			<h1 className="title">Indra Puji Novirwan</h1>
			<h3 className="subtitle">Full Stack Javascript Developer</h3>
			<ul className="homeNav">
				<Link to="/profile">
					<li onMouseLeave={leaveColor} onMouseOver={overColor}>
						Home
					</li>
				</Link>
				<Link to="/profile/about">
					<li onMouseLeave={leaveColor} onMouseOver={overColor}>
						About
					</li>
				</Link>
				<Link to="/profile/resume">
					<li onMouseLeave={leaveColor} onMouseOver={overColor}>
						Resume
					</li>
				</Link>
				<Link to="/profile/portofolio">
					<li onMouseLeave={leaveColor} onMouseOver={overColor}>
						Portofolio
					</li>
				</Link>
			</ul>
		</>
	);
}

export default Home;
