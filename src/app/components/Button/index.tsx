import {
	Button as MantineButton,
	type ButtonProps as MantineButtonProps,
} from "@mantine/core";
import clsx from "clsx";
import type { FC } from "react";
import styles from "./index.module.css";

export type ButtonVariant =
	| "primary"
	| "secondary"
	| "success"
	| "error"
	| "warning"
	| "ghost"
	| "outline";

export type ButtonSize = "xs" | "sm" | "md" | "lg";

export type ButtonProps = Omit<
	MantineButtonProps,
	"variant" | "size" | "classNames"
> & {
	variant?: ButtonVariant;
	size?: ButtonSize;
	fullWidth?: boolean;
	loading?: boolean;
	classNames?: {
		root?: string;
		inner?: string;
		section?: string;
		label?: string;
		loader?: string;
	};
};

export const Button: FC<ButtonProps> = ({
	children,
	variant = "primary",
	size = "md",
	fullWidth = false,
	loading = false,
	classNames,
	disabled,
	...props
}) => {
	// ボタンサイズに応じたローダーサイズを設定
	const getLoaderSize = (buttonSize: ButtonSize): number => {
		switch (buttonSize) {
			case "xs":
				return 12;
			case "sm":
				return 14;
			case "md":
				return 16;
			case "lg":
				return 18;
			default:
				return 16;
		}
	};

	// バリエーションに応じたローダー色を取得
	const getLoaderColor = (buttonVariant: ButtonVariant): string => {
		switch (buttonVariant) {
			case "ghost":
			case "outline":
				return "var(--color-primary-600)";
			case "secondary":
				return "var(--color-text-primary)";
			default:
				return "currentColor";
		}
	};

	// 内部スタイルと外部から渡されたclassNamesをマージ
	const mergedClassNames = {
		root: clsx(
			styles.button,
			styles[variant],
			styles[size],
			{
				[styles.fullWidth]: fullWidth,
				[styles.loading]: loading,
				[styles.disabled]: disabled || loading,
			},
			classNames?.root,
		),
		inner: classNames?.inner,
		section: classNames?.section,
		label: classNames?.label,
		loader: clsx(styles.loader, classNames?.loader),
	};

	return (
		<MantineButton
			{...props}
			classNames={mergedClassNames}
			disabled={disabled || loading}
			loading={loading}
			loaderProps={{
				size: getLoaderSize(size),
				color: getLoaderColor(variant),
			}}
			justify="center"
			unstyled
		>
			{children}
		</MantineButton>
	);
};

export default Button;
