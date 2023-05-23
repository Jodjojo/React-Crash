import { useState } from "react";

function ListGroup() {
	let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

	// let SelectedIndex = -1;
	// Hook(useState) - function that allows us to tap into built in features in reacts...telling react that this component will have data or state that can chnage over time
	const [SelectedIndex, SetSelectedIndex] = useState(-1);
	// const arr = useState();
	// The value (-1) in the useState is the value of the initial selector index then on each clickm the setSelectedIndex function is called using the index of the List clicked
	// arr[0]; //Initial Variable(selectedIndex)
	// arr[1]; //Updater function to update Dom

	return (
		<>
			<h1>List</h1>
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

// To Highlight a list item when clicked we have a bootstrap class called active
// To Limit which item gets the active class on click we Manage the state by using a variable to keep track of the index of the selected item
// so we use the conditional operator to decide if the variable index is equal to the selectedIndex variable we created
export default ListGroup;
