import clsx from "clsx";
import styles from "./Button.module.css";

export interface ButtonProps {
	/** Is this the principal call to action on the page? */
	primary?: boolean;
	/** What background color to use */
	backgroundColor?: string;
	/** How large should the button be? */
	size?: "small" | "medium" | "large";
	/** Button contents */
	label: string;
	/** Optional click handler */
	onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
	primary = false,
	size = "medium",
	backgroundColor,
	label,
	onClick,
	...props
}: ButtonProps) => {
	// CSS moduleのクラス名を組み合わせる
	const buttonClasses = clsx(
		styles.button,
		styles[size],
		primary ? styles.primary : styles.secondary,
	);

	return (
		<button
			type="button"
			className={buttonClasses}
			onClick={onClick}
			style={backgroundColor ? { backgroundColor } : undefined}
			{...props}
		>
			{label}
		</button>
	);
};
