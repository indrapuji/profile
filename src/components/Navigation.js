import React from "react";
import { useHistory } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";

function Navigation() {
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
		e.target.style.color = "blue";
	}
	function leaveColor(e) {
		e.target.style.color = "lightgrey";
	}
	return (
		<>
			<Container>
				<Nav className="justify-content-end">
					<Nav.Item>
						<Nav.Link
							onMouseLeave={leaveColor}
							onMouseOver={overColor}
							onClick={profile}
						>
							Home
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							onMouseLeave={leaveColor}
							onMouseOver={overColor}
							onClick={about}
						>
							About
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							onMouseLeave={leaveColor}
							onMouseOver={overColor}
							onClick={resume}
						>
							Resume
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link
							onMouseLeave={leaveColor}
							onMouseOver={overColor}
							onClick={portofolio}
						>
							Portofolio
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</Container>
		</>
	);
}
export default Navigation;
