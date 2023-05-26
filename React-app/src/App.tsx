import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
	// We use the useState value to set our alert visibility
	// if there's alertVisible and Alert then we return the button setting it to true for the alert to show
	const [alertVisible, setAlertVisibility] = useState(false);
	return (
		<div>
			{alertVisible && (
				<Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
			)}
			<Button color='secondary' onClick={() => setAlertVisibility(true)}>
				My Button
			</Button>
		</div>
	);
}

// So instead of passing text as a part of the alert header we can pass the text as a child of the HTML alert element
//<Alert text='Hello World'></Alert> -- ijstead of this
export default App;
