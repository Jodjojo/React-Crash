import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	// We use the type of Children to be React Node so it is not limited to a string
}

const Alert = ({ children }: Props) => {
	return <div className='alert alert-primary'>{children}</div>;
};

// using the rafce to automatically create a component that is exported
export default Alert;
