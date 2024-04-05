import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import FooterComponent from "@/components/footer/FooterComponent";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

import { inter, suwannaphum, localCustomFont } from "./fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "PANDA Ecommerce",
	description: "Panda Ecommerce Web is a web application for selling products.",
	openGraph: {
		title: "PANDA Ecommerce",
		description: "Panda Ecommerce Web is a web application for selling products.",
		images: 'https://www.terawork.com/blog/wp-content/uploads/2022/11/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a-1-1.png'
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`flex flex-col h-screen ${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}`}>
				<header>
					<NavbarComponent />
				</header>
				<ErrorBoundary errorComponent={Error}>
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</ErrorBoundary>
				<FooterComponent />
			</body>
		</html>
	);
}
