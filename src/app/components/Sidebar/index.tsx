import clsx from "clsx";
import { type FC, useState } from "react";
import { FiFile, FiFolder } from "react-icons/fi";
import { SearchBar } from "../SearchBar";
import { SidebarItem } from "./Item";
import styles from "./index.module.css";
import { SidebarSection } from "./Section";

export type SidebarProps = {
	className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => {
	const [searchValue, setSearchValue] = useState("");

	return (
		<aside className={clsx(styles.sidebar, className)}>
			{/* 検索バー */}
			<SearchBar
				value={searchValue}
				onChange={setSearchValue}
				placeholder="ファイルを検索..."
			/>
			{/* プロジェクト */}
			<SidebarSection
				title="プロジェクト"
				icon={<FiFolder />}
				defaultExpanded={true}
			>
				<SidebarSection
					title="ドキュメント"
					icon={<FiFolder />}
					defaultExpanded={true}
				>
					<SidebarItem icon={<FiFile />} title="README.md" />
					<SidebarItem icon={<FiFile />} title="API仕様書.md" />
				</SidebarSection>

				<SidebarSection
					title="ガイド"
					icon={<FiFolder />}
					defaultExpanded={true}
				>
					<SidebarItem icon={<FiFile />} title="インストール.md" />
					<SidebarItem icon={<FiFile />} title="使い方.md" />
				</SidebarSection>

				<SidebarItem icon={<FiFile />} title="CHANGELOG.md" />
			</SidebarSection>
		</aside>
	);
};
