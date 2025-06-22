import type { Meta, StoryObj } from '@storybook/react';
import { MarkdownViewer } from './index';
import { sampleMarkdown } from './sample';

const meta: Meta<typeof MarkdownViewer> = {
  title: 'Components/MarkdownViewer',
  component: MarkdownViewer,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'react-markdownを使用してMarkdownコンテンツを表示するコンポーネントです。',
      },
    },
  },
  argTypes: {
    content: {
      description: '表示するMarkdownコンテンツ',
      control: 'text',
    },
    className: {
      description: '追加のCSSクラス名',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: sampleMarkdown,
  },
};

export const SimpleMarkdown: Story = {
  args: {
    content: `# シンプルなタイトル

これは **シンプルな** Markdownの例です。

- リスト項目1
- リスト項目2

\`inline code\` も表示できます。`,
  },
};

export const CodeBlock: Story = {
  args: {
    content: `# コードブロックの例

以下はJavaScriptのコード例です：

\`\`\`javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
\`\`\`

インライン\`code\`も表示されます。`,
  },
};

export const Table: Story = {
  args: {
    content: `# テーブルの例

| 項目 | 価格 | 在庫 |
|------|------|------|
| りんご | 100円 | 50個 |
| みかん | 80円 | 30個 |
| バナナ | 120円 | 20個 |

テーブルの表示例です。`,
  },
};

export const Blockquote: Story = {
  args: {
    content: `# 引用の例

> これは重要な引用文です。
> 複数行にわたって記述することもできます。

通常のテキストに戻ります。

> 別の引用文もあります。`,
  },
};

export const EmptyContent: Story = {
  args: {
    content: '',
  },
};
