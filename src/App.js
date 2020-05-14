import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About, Resume, Portofolio } from "./pages";

function App() {
	return (
		<div className="app">
			<main>
				<Router>
					<Switch>
						<Route exact path="/profile">
							<Home />
						</Route>
						<Route path="/profile/about">
							<About />
						</Route>
						<Route path="/profile/resume">
							<Resume />
						</Route>
						<Route path="/profile/portofolio">
							<Portofolio />
						</Route>
					</Switch>
				</Router>
			</main>
		</div>
	);
}

export default App;
