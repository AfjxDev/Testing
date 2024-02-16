import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
	subsets: [
		"latin"
	]
});

export const metadata: Metadata = {
	title: "Document",
	description: "Description",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>)
{
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" httpEquiv="Content-Type" content="text/html; charset=utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	);
}
