import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { SearchBar, type SearchBarProps } from "./index";

const meta: Meta<typeof SearchBar> = {
	title: "Components/SearchBar",
	component: SearchBar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		value: {
			control: "text",
			description: "検索フィールドの値",
		},
		onChange: {
			action: "changed",
			description: "値が変更されたときのコールバック",
		},
		placeholder: {
			control: "text",
			description: "プレースホルダーテキスト",
		},
		className: {
			control: "text",
			description: "追加のCSSクラス",
		},
		icon: {
			control: false,
			description: "左側に表示するアイコン",
		},
		disabled: {
			control: "boolean",
			description: "無効状態",
		},
	},
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

// 制御されたコンポーネントのためのラッパー
const SearchBarWrapper = (args: SearchBarProps) => {
	const [value, setValue] = useState(args.value || "");
	return <SearchBar {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
	render: SearchBarWrapper,
	args: {
		placeholder: "検索...",
		disabled: false,
	},
};

export const FileSearch: Story = {
	render: SearchBarWrapper,
	args: {
		placeholder: "ファイルを検索...",
		disabled: false,
	},
};

export const UserSearch: Story = {
	render: SearchBarWrapper,
	args: {
		placeholder: "ユーザーを検索...",
		icon: <FaUser size={14} />,
		disabled: false,
	},
};

export const Disabled: Story = {
	render: SearchBarWrapper,
	args: {
		placeholder: "検索は無効です",
		disabled: true,
	},
};

export const WithValue: Story = {
	render: SearchBarWrapper,
	args: {
		value: "サンプル検索",
		placeholder: "検索...",
		disabled: false,
	},
};
