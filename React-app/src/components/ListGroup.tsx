import { useState } from "react";
// We will need to pass object  with two properties { items: [], heading: string}
// we use the Interface typescript feature to define the shape or interface of an object
interface Props {
	items: string[];
	heading: string;
}

function ListGroup({ items, heading }: Props) {
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
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

// To make a component reusable we use PROPS OR PROPERTIES
// Props are the inputs to our components
// Instead og harcoding our listGroup we want to make it possible that we can pass various labels into the component
export default ListGroup;
