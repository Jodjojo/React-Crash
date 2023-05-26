import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	// We use the type of Children to be React Node so it is not limited to a string
	onClose: () => void;
	// The prop function to handle the exceution of an action when the clone button on an alert is clicked on
}

const Alert = ({ children, onClose }: Props) => {
	return (
		<div className='alert alert-primary alert-dismisible'>
			{children}
			<button
				type='button'
				className='btn-close'
				onClick={onClose}
				data-bs-dismiss='alert'
				aria-label='Close'
			></button>
		</div>
	);
};

// using the rafce to automatically create a component that is exported
export default Alert;
