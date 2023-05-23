import { MouseEvent } from "react";

function ListGroup() {
	let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

	// EVENT HANDLER
	// When we are declaring an event handler function outside of an onClick handler in react we have to define the type of function by calling the function type MouseEvent from React(TYPE ANNOTATION)
	const handleClick = (event: MouseEvent) => console.log(event);
	return (
		<>
			<h1>List</h1>
			{items.length === 0 && <p>No Item Found</p>}

			<ul className='list-group'>
				{items.map((item, index) => (
					<li className='list-group-item' key={item} onClick={handleClick}>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

// In react each element has a property called onClick for handling events
// When mapping items we can add a second parameter called an INDEX

export default ListGroup;
