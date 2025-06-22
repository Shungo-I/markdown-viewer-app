import type { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import styles from "./index.module.css";

type MarkdownViewerProps = {
	content: string;
	className?: string;
};

export const MarkdownViewer: FC<MarkdownViewerProps> = ({
	content,
	className,
}) => {
	return (
		<div className={`${styles.markdownViewer} ${className || ""}`}>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				components={{
					h1: ({ children }) => (
						<h1 className={styles["markdownViewer-heading1"]}>{children}</h1>
					),
					h2: ({ children }) => (
						<h2 className={styles["markdownViewer-heading2"]}>{children}</h2>
					),
					h3: ({ children }) => (
						<h3 className={styles["markdownViewer-heading3"]}>{children}</h3>
					),
					p: ({ children }) => (
						<p className={styles["markdownViewer-paragraph"]}>{children}</p>
					),
					ul: ({ children }) => (
						<ul className={styles["markdownViewer-unorderedList"]}>
							{children}
						</ul>
					),
					ol: ({ children }) => (
						<ol className={styles["markdownViewer-orderedList"]}>{children}</ol>
					),
					li: ({ children }) => (
						<li className={styles["markdownViewer-listItem"]}>{children}</li>
					),
					blockquote: ({ children }) => (
						<blockquote className={styles["markdownViewer-blockquote"]}>
							{children}
						</blockquote>
					),
					code: ({ children, className, ...props }) => {
						const match = /language-(\w+)/.exec(className || "");
						const language = match ? match[1] : "";
						const isInlineCode = !match;

						return isInlineCode ? (
							<code className={styles["markdownViewer-inlineCode"]} {...props}>
								{children}
							</code>
						) : (
							<SyntaxHighlighter language={language} style={tomorrow}>
								{String(children).replace(/\n$/, "")}
							</SyntaxHighlighter>
						);
					},
					pre: ({ children }) => (
						<div className={styles["markdownViewer-pre"]}>{children}</div>
					),
					table: ({ children }) => (
						<table className={styles["markdownViewer-table"]}>{children}</table>
					),
					thead: ({ children }) => (
						<thead className={styles["markdownViewer-tableHead"]}>
							{children}
						</thead>
					),
					tbody: ({ children }) => (
						<tbody className={styles["markdownViewer-tableBody"]}>
							{children}
						</tbody>
					),
					th: ({ children }) => (
						<th className={styles["markdownViewer-tableHeaderCell"]}>
							{children}
						</th>
					),
					td: ({ children }) => (
						<td className={styles["markdownViewer-tableCell"]}>{children}</td>
					),
					hr: () => <hr className={styles["markdownViewer-horizontalRule"]} />,
					strong: ({ children }) => (
						<strong className={styles["markdownViewer-bold"]}>
							{children}
						</strong>
					),
					em: ({ children }) => (
						<em className={styles["markdownViewer-italic"]}>{children}</em>
					),
					del: ({ children }) => (
						<del className={styles["markdownViewer-strikethrough"]}>
							{children}
						</del>
					),
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
};
