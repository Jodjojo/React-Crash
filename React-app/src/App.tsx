import Alert from "./components/Alert";

function App() {
	return (
		<div>
			<Alert>
				Hello <span>World</span>
			</Alert>
		</div>
	);
}

// So instead of passing text as a part of the alert header we can pass the text as a child of the HTML alert element
//<Alert text='Hello World'></Alert> -- ijstead of this
export default App;
