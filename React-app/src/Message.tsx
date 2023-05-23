// Creating A REACT component
////2 ways to create a component - A JS class or a function(more popular and consise)

// COMPONENT 1
// PascalCasing - convention where you capitalize the first letter of every word - always follow pascal casing
function Message() {
	// jsx syntax: Javascript XML - converts HTML looking vode to JSX
	const name = "Joseph";
	// Dynamically calling a variable in JSX is using {name}
	if (name) return <h1>Hello {name}</h1>;
	return <h1>Hello World</h1>;
}

// To use Component we export as default and go to the app.tsx to use this component
export default Message;
