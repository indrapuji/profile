import React from "react";
import { Carousel } from "react-bootstrap";
import Kanban from "../assets/kanban.jpg";

function Preview() {
	return (
		<>
			<Carousel indicators={false} controls={false} style={{ width: "35rem" }}>
				<Carousel.Item>
					<img className="d-block w-100" src={Kanban} alt="First slide" />
					<Carousel.Caption>
						<h3 style={{ color: "#45fc03" }}>Kanban</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className="d-block w-100" src={Kanban} alt="Third slide" />
					<Carousel.Caption>
						<h3 style={{ color: "#45fc03" }}>Kanban</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
}

export default Preview;
