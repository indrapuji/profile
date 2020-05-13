import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Skills, Experience } from "./pages";

function App() {
	return (
		<Router>
			<Link to="/profile">Home</Link>
			<Link to="/profile/skills">Skills</Link>
			<Link to="/profile/experience">Experience</Link>
			<Switch>
				<Route exact path="/profile">
					<Home />
				</Route>
				<Route path="/profile/skills">
					<Skills />
				</Route>
				<Route path="/profile/experience">
					<Experience />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
