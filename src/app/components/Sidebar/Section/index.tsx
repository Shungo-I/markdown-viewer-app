import type { FC, ReactNode } from "react";
import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import styles from "./index.module.css";

export type SidebarSectionProps = {
	title: string;
	icon?: ReactNode;
	defaultExpanded?: boolean;
	children?: ReactNode;
};

export const SidebarSection: FC<SidebarSectionProps> = ({
	title,
	icon,
	defaultExpanded = false,
	children,
}) => {
	const [isExpanded, setIsExpanded] = useState(defaultExpanded);

	const toggleExpanded = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div className={styles.sidebarSection}>
			<button
				className={styles.sectionHeader}
				onClick={toggleExpanded}
				type="button"
				aria-expanded={isExpanded}
				aria-label={`${title}セクションを${isExpanded ? "閉じる" : "開く"}`}
			>
				<span className={styles.chevron}>
					{isExpanded ? (
						<FiChevronDown size={14} />
					) : (
						<FiChevronRight size={14} />
					)}
				</span>
				{icon && <span className={styles.icon}>{icon}</span>}
				<span className={styles.title}>{title}</span>
			</button>
			{isExpanded && children && (
				<div className={styles.sectionContent}>{children}</div>
			)}
		</div>
	);
};
