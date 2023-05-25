import { useState } from "react";
// We will need to pass object  with two properties { items: [], heading: string}
// we use the Interface typescript feature to define the shape or interface of an object
// In our Props object we can add a third property which will be a function for handling event/action that will be executed on click of the items on the list
// onSelectItem is like the onClick version of this
interface Props {
	items: string[];
	heading: string;
	// (item: string) => void //sample function
	onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
	const [SelectedIndex, SetSelectedIndex] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No Item Found</p>}

			<ul className='list-group'>
				{items.map((item, index) => (
					<li
						className={
							SelectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={item}
						onClick={() => {
							SetSelectedIndex(index);
							onSelectItem(item);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

// To create a component that can accept children
export default ListGroup;
