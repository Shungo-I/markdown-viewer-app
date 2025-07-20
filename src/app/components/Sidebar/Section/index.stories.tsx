import type { Meta, StoryObj } from "@storybook/react";
import { FiFile, FiFolder } from "react-icons/fi";
import { SidebarItem } from "../Item";
import { SidebarSection } from "./index";

const meta: Meta<typeof SidebarSection> = {
	title: "Components/Sidebar/Section",
	component: SidebarSection,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		title: {
			control: "text",
			description: "セクションのタイトル",
		},
		icon: {
			control: false,
			description: "アイコンコンポーネント",
		},
		defaultExpanded: {
			control: "boolean",
			description: "デフォルトで展開されているか",
		},
		children: {
			control: false,
			description: "子要素",
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "サンプルセクション",
		children: (
			<div>
				<SidebarItem title="ファイル1.md" icon={<FiFile />} />
				<SidebarItem title="ファイル2.md" icon={<FiFile />} />
			</div>
		),
	},
};

export const WithIcon: Story = {
	args: {
		title: "ドキュメント",
		icon: <FiFolder />,
		children: (
			<div>
				<SidebarItem title="README.md" icon={<FiFile />} />
				<SidebarItem title="API仕様書.md" icon={<FiFile />} />
			</div>
		),
	},
};

export const Expanded: Story = {
	args: {
		title: "展開されたセクション",
		icon: <FiFolder />,
		defaultExpanded: true,
		children: (
			<div>
				<SidebarItem title="ファイル1.md" icon={<FiFile />} />
				<SidebarItem title="ファイル2.md" icon={<FiFile />} />
				<SidebarItem title="ファイル3.md" icon={<FiFile />} />
			</div>
		),
	},
};

export const Nested: Story = {
	args: {
		title: "ルートフォルダ",
		icon: <FiFolder />,
		defaultExpanded: true,
		children: (
			<div>
				<SidebarSection
					title="サブフォルダ1"
					icon={<FiFolder />}
					defaultExpanded={true}
				>
					<SidebarItem title="ファイル1.md" icon={<FiFile />} />
					<SidebarItem title="ファイル2.md" icon={<FiFile />} />
				</SidebarSection>
				<SidebarSection title="サブフォルダ2" icon={<FiFolder />}>
					<SidebarItem title="ファイル3.md" icon={<FiFile />} />
				</SidebarSection>
				<SidebarItem title="ルートファイル.md" icon={<FiFile />} />
			</div>
		),
	},
};
