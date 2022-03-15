import React from "react";
import SelectLanguage from "./components/SelectLanguage";
import EnterCity from "./components/EnterCity";
import Items from "./components/Items";

import './app.css';

const App = () => {
	return (
		<div className="App">
			<SelectLanguage />
			<EnterCity />
			<Items />
		</div>
	);
}

export default App;
