import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		docs: {
			description: {
				component:
					"デジタル庁デザインシステムに準拠したButtonコンポーネント（Mantineベース）",
			},
		},
	},
	argTypes: {
		variant: {
			control: { type: "select" },
			options: [
				"primary",
				"secondary",
				"success",
				"error",
				"warning",
				"ghost",
				"outline",
			],
			description: "ボタンのスタイルバリエーション",
		},
		size: {
			control: { type: "select" },
			options: ["xs", "sm", "md", "lg"],
			description: "ボタンのサイズ",
		},
		disabled: {
			control: { type: "boolean" },
			description: "無効状態",
		},
		loading: {
			control: { type: "boolean" },
			description: "ローディング状態",
		},
		fullWidth: {
			control: { type: "boolean" },
			description: "全幅表示",
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルトストーリー
export const Default: Story = {
	args: {
		children: "ボタン",
		variant: "primary",
		size: "md",
	},
};

// バリエーション表示
export const Variants: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
			<Button variant="primary">プライマリ</Button>
			<Button variant="secondary">セカンダリ</Button>
			<Button variant="success">サクセス</Button>
			<Button variant="error">エラー</Button>
			<Button variant="warning">警告</Button>
			<Button variant="ghost">ゴースト</Button>
			<Button variant="outline">アウトライン</Button>
		</div>
	),
};

// サイズ表示
export const Sizes: Story = {
	render: () => (
		<div
			style={{
				display: "flex",
				gap: "16px",
				alignItems: "center",
				flexWrap: "wrap",
			}}
		>
			<Button size="xs">XSサイズ</Button>
			<Button size="sm">SMサイズ</Button>
			<Button size="md">MDサイズ</Button>
			<Button size="lg">LGサイズ</Button>
		</div>
	),
};

// ローディング状態の詳細デモ
export const Loading: Story = {
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
			<div>
				<h3
					style={{ marginBottom: "12px", fontSize: "16px", fontWeight: "bold" }}
				>
					サイズ別ローディング
				</h3>
				<div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
					<Button size="xs" loading>
						送信中...
					</Button>
					<Button size="sm" loading>
						処理中...
					</Button>
					<Button size="md" loading>
						アップロード中...
					</Button>
					<Button size="lg" loading>
						保存中...
					</Button>
				</div>
			</div>

			<div>
				<h3
					style={{ marginBottom: "12px", fontSize: "16px", fontWeight: "bold" }}
				>
					バリエーション別ローディング
				</h3>
				<div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
					<Button variant="primary" loading>
						データ送信中
					</Button>
					<Button variant="secondary" loading>
						データ送信中
					</Button>
					<Button variant="success" loading>
						ファイル保存中
					</Button>
					<Button variant="error" loading>
						削除中
					</Button>
					<Button variant="warning" loading>
						警告中
					</Button>
					<Button variant="ghost" loading>
						ゴースト中
					</Button>
					<Button variant="outline" loading>
						読み込み中
					</Button>
				</div>
			</div>

			<div>
				<h3
					style={{ marginBottom: "12px", fontSize: "16px", fontWeight: "bold" }}
				>
					全幅ローディング
				</h3>
				<div style={{ width: "300px" }}>
					<Button fullWidth loading variant="primary">
						フォーム送信中...
					</Button>
				</div>
			</div>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"ローディング状態の実際の使用例を示しています。アイコンサイズがボタンサイズに適切に調整されていることを確認できます。",
			},
		},
	},
};

// 全幅表示
export const FullWidth: Story = {
	render: () => (
		<div style={{ width: "400px" }}>
			<Button fullWidth variant="primary">
				全幅ボタン
			</Button>
		</div>
	),
};
