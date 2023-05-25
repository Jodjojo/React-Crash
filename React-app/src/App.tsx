import Button from "./components/Button";

function App() {
	return (
		<div>
			<Button
				color='secondary'
				onClick={() => {
					console.log("Clicked");
				}}
			>
				My Button
			</Button>
		</div>
	);
}

// So instead of passing text as a part of the alert header we can pass the text as a child of the HTML alert element
//<Alert text='Hello World'></Alert> -- ijstead of this
export default App;
