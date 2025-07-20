import clsx from "clsx";
import type { FC, ReactNode } from "react";
import styles from "./index.module.css";

export type SidebarItemProps = {
	title: string;
	icon?: ReactNode;
	isActive?: boolean;
	onClick?: () => void;
};

export const SidebarItem: FC<SidebarItemProps> = ({
	title,
	icon,
	isActive = false,
	onClick,
}) => {
	return (
		<button
			className={clsx(styles.sidebarItem, {
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
