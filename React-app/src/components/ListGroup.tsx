import Message from "../Message";

function ListGroup() {
	let items = ["New York", "San Fransico", "Tokyo", "London", "Paris"];

	return (
		<>
			<h1>List</h1>
			{items.length === 0 && <p>No Item Found</p>}

			<ul className='list-group'>
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	);
}

// iF we want to do conditional rendering that is using the if/else statement we change the const variable declarere from const tro let or use Conditional Rendering using JSX expression
// if (items.length === 0)
// return (
// 	<>
// 		<h1>List</h1>
// 		<p>No item Found</p>;
// 	</>
// );

// CONDITIONAL OPERATOR
/*
	const GetMessage = () => (items.length === 0 ? <p>No Item Found</p> : null);
	return (
		<>
			<h1>List</h1>
			{GetMessage()}
			<ul className='list-group'>
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	);
*/
/* {items.length === 0 ? <p>No Item Found</p> : null} ---condtitional operator*/

// LOGIGAL ADDING
// So instead of using the conditional Operator and having to add null we usethe && operator so it only works when both are satisfied

export default ListGroup;
