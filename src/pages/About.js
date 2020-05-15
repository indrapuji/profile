import React from "react";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import { Container, Card, Row, Col, Image } from "react-bootstrap";

function About() {
	return (
		<div>
			<Container>
				<Navigation />
				<motion.h1
					initial={{ y: 250 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.5 }}
					style={{ fontSize: "3rem", color: "white", paddingTop: "1%" }}
				>
					Indra Puji Novirwan
				</motion.h1>
			</Container>
			<Container>
				<motion.div
					initial={{ y: 250, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 1.5 }}
				>
					<Card
						className="mt-5"
						style={{ backgroundColor: "black", opacity: 0.9 }}
					>
						<Card.Header style={{ color: "white" }}>
							<h5>About</h5>
							<h1>MORE ABOUT ME</h1>
						</Card.Header>
						<Card.Body>
							<Row>
								<Col sm={4}>
									<Image src={require("../assets/profile.jpg")} thumbnail />
								</Col>
								<Col sm={8}>
									<h4 style={{ color: "#45fc03" }}>
										Full Stack Javascript Developer
									</h4>
									<p style={{ color: "white" }}>
										I'm a web designer / developer based in Bekasi, Indonesia. I
										have a passion for web design and love to create for web.
									</p>
									<Row style={{ color: "white" }}>
										<Col>
											<ul>
												<li>Phone: 0821 222 89 158</li>
												<li>City : Bekasi</li>
											</ul>
										</Col>
										<Col>
											<ul>
												<li>Email: indrapuji@gmail.com</li>
												<li>Freelance: Available</li>
											</ul>
										</Col>
									</Row>
									<p style={{ color: "white" }}>
										I'm a developer, so I know how to create your website using
										the Javascript technologies available.
									</p>
								</Col>
							</Row>
							<div className="mt-5" style={{ color: "white" }}>
								<h5>Skills</h5>
							</div>
							<Row style={{ color: "white" }}>
								<Col>Colomn 1</Col>
								<Col>Colomn 2</Col>
							</Row>
						</Card.Body>
					</Card>
				</motion.div>
			</Container>
		</div>
	);
}

export default About;
