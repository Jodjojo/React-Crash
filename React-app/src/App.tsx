// First you import your Component file
import ListGroup from "./components/ListGroup";

// Now to use the imported component we use it just as a normal HTML component tag with opening and closing tag
function App() {
	return (
		<div>
			<ListGroup></ListGroup>
			<ListGroup></ListGroup>
		</div>
	);
}

// If we had 2 or more sitings of the same component like having 2 list groups, they would have their own individuals states and will be independent of each other

// export the APP component
export default App;
