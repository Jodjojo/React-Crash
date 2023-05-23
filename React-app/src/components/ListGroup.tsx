function ListGroup() {
	const items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

	return (
		<>
			<h1>List</h1>
			<ul className='list-group'>
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	);
}

// For JSX we dont have a For loop so we use a different technique using MAP
// In JSX we can only use HTML components or Other React components Normally
//So we wrap what we want in parenthesis for the JSX to understand it
// Each Item in our Mapped loop should have a unique Key Prop...which in most cases we use the ITEM ID as the uniwue key but for this we just use the item name

export default ListGroup;
