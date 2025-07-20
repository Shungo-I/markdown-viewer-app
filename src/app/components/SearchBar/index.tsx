import { TextInput } from "@mantine/core";
import clsx from "clsx";
import type { FC, ReactNode } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./index.module.css";

export type SearchBarProps = {
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	className?: string;
	icon?: ReactNode;
	disabled?: boolean;
};

export const SearchBar: FC<SearchBarProps> = ({
	value,
	onChange,
	placeholder = "検索...",
	className,
	icon = <FaSearch size={14} />,
	disabled = false,
}) => {
	return (
		<div className={clsx(styles.searchContainer, className)}>
			<TextInput
				placeholder={placeholder}
				value={value}
				onChange={(event) => onChange(event.currentTarget.value)}
				leftSection={icon}
				disabled={disabled}
				styles={{
					input: {
						backgroundColor: "var(--mantine-color-gray-0)",
						border: "1px solid var(--mantine-color-gray-3)",
					},
				}}
			/>
		</div>
	);
};
