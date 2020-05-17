import React from "react";
import { Home, About, Resume, Portfolio } from "./pages";
import Navigation from "./components/Navigation";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<div className="App">
			<main>
				<Navigation />
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route exact path="/profile">
							<Home />
						</Route>
						<Route path="/profile/about">
							<About />
						</Route>
						<Route path="/profile/resume">
							<Resume />
						</Route>
						<Route path="/profile/portfolio">
							<Portfolio />
						</Route>
					</Switch>
				</AnimatePresence>
			</main>
		</div>
	);
}

export default App;
