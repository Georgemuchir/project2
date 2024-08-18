import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Form from "./components/Form";

function App() {
	const [search, setSearch] = useState("");

	return (
		<>
			<nav>
				<Nav search={search} setSearch={setSearch} />
			</nav>
			<main>
				<Homepage search={search} />
			</main>
		</>
	);
}

export default App;
