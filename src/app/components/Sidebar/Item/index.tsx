import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./index.module.css";

export type SidebarItemProps = {
	title: string;
	icon?: ReactNode;
	level?: number;
	isActive?: boolean;
	onClick?: () => void;
};

export const SidebarItem = ({
	title,
	icon,
	level = 0,
	isActive = false,
	onClick,
}: SidebarItemProps) => {
	return (
		<button
			className={clsx(styles.sidebarItem, styles[`level${level}`], {
				[styles.active]: isActive,
			})}
			onClick={onClick}
			type="button"
		>
			{icon && <span className={styles.icon}>{icon}</span>}
			<span className={styles.title}>{title}</span>
		</button>
	);
};
