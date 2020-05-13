import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Skills, Experience } from "./pages";

function App() {
	return (
		<Router>
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
