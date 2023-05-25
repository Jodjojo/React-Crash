interface Props {
	color?: "primary" | "secondary" | "danger"; //We add the question mark to tell the Typescript complier that the value is optional
	// The "primary" | "secondary" is telling the prop that these are the only values were allowed to get if we try and put another thing different from these in the color prop the typescript compiler will give us an error
	children: string;
	onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
	return (
		<button className={"btn btn-" + color} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
