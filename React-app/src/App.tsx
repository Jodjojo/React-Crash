// First you import your Component file
import ListGroup from "./components/ListGroup";

// Now to use the imported component we use it just as a normal HTML component tag with opening and closing tag
function App() {
	let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

	const handleSelectItem = (item: string) => {
		// what you want to be executed on select of the list item
		console.log(item);
	};
	return (
		<div>
			<ListGroup
				items={items}
				heading='Cities'
				onSelectItem={handleSelectItem}
			></ListGroup>
		</div>
	);
}

// export the APP component
export default App;
