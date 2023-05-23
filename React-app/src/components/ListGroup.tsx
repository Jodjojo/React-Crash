function ListGroup() {
	// Importing ListGroup Markup from the Bootstrap Documentation
	return (
		<>
			<h1>List</h1>
			<ul className="list-group">
				<li className="list-group-item">An item</li>
				<li className="list-group-item">A second item</li>
				<li className="list-group-item">A third item</li>
				<li className="list-group-item">A fourth item</li>
				<li className="list-group-item">And a fifth one</li>
			</ul>
		</>
	);
}

// In react a component cannot return more than one component...so we can return this listGroup and still return a header under this component
// So we can Either use FRAGMENTS to solve this problem or wrap everything with a div
// or use empty tags to tell react were using fragments
////////////////////////////FRAGMENTS/////////////////////////
/*
import { Fragment } from "react";

function ListGroup() {
	// Importing ListGroup Markup from the Bootstrap Documentation
	return (
		<Fragment>
			<h1>List</h1>
			<ul className="list-group">
				<li className="list-group-item">An item</li>
				<li className="list-group-item">A second item</li>
				<li className="list-group-item">A third item</li>
				<li className="list-group-item">A fourth item</li>
				<li className="list-group-item">And a fifth one</li>
			</ul>
		</Fragment>
	);
}
*/
// Fragments allows us to solve this problem without creating an external DIV element in the DOM

///////////////////////////////////////////////////////////////
//////////////////////DIV//////////////////////////////////////
/*
function ListGroup() {
	// Importing ListGroup Markup from the Bootstrap Documentation
	return (
		<div>
			<h1>List</h1>
			<ul className="list-group">
				<li className="list-group-item">An item</li>
				<li className="list-group-item">A second item</li>
				<li className="list-group-item">A third item</li>
				<li className="list-group-item">A fourth item</li>
				<li className="list-group-item">And a fifth one</li>
			</ul>
		</div>
	);
*/
export default ListGroup;
