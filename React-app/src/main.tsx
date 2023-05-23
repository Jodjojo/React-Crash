import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Importing Bootstrap
import "bootstrap/dist/css/bootstrap.css";

// Component Tree rendered for this using React Dom(not limited to mobile building like react native) or rendered for  A mobile app using React Native
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
