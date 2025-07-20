import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from ".";

const meta: Meta<typeof Sidebar> = {
	title: "Components/Sidebar",
	component: Sidebar,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	argTypes: {
		className: {
			control: "text",
			description: "Additional CSS class names",
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render: (args) => (
		<div style={{ display: "flex", height: "100vh" }}>
			<Sidebar {...args} />
			<div style={{ flex: 1, padding: "20px", backgroundColor: "#fff" }}>
				<h1>メインコンテンツエリア</h1>
				<p>サイドバーが左側に表示されます。</p>
				<p>ファイルやセクションをクリックして動作を確認できます。</p>
			</div>
		</div>
	),
};
