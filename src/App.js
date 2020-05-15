import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, About, Resume, Portofolio } from "./pages";
import { motion, AnimatePresence } from "framer-motion";

function App() {
	return (
		<motion.div className="app">
			<main>
				<AnimatePresence>
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
				</AnimatePresence>
			</main>
		</motion.div>
	);
}

export default App;
