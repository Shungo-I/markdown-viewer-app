import type { Meta, StoryObj } from "@storybook/react";
import { FiFile } from "react-icons/fi";
import { SidebarItem } from "./index";

const meta: Meta<typeof SidebarItem> = {
	title: "Components/Sidebar/Item",
	component: SidebarItem,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		title: {
			control: "text",
			description: "アイテムのタイトル",
		},
		icon: {
			control: false,
			description: "アイコンコンポーネント",
		},
		isActive: {
			control: "boolean",
			description: "アクティブ状態",
		},
		onClick: {
			action: "clicked",
			description: "クリック時のコールバック",
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "サンプルアイテム",
	},
};

export const WithIcon: Story = {
	args: {
		title: "ファイル.md",
		icon: <FiFile />,
	},
};

export const Active: Story = {
	args: {
		title: "アクティブなアイテム",
		icon: <FiFile />,
		isActive: true,
	},
};
