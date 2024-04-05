"use client";
import Link from "next/link";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./menu";
import { useRouter } from "next/navigation";
import { Image } from "@nextui-org/react";

type MenuItem = {
	name: string;
	path: string;
	active: boolean;
};

export default function NavbarComponent() {
	const pathname = usePathname();
	const [menu, setMenu] = useState<MenuItem[]>(MenuList);
	const router = useRouter();

	return (
		<Navbar fluid rounded className="w-full p-4">
			<NavbarBrand as={Link} href="https://istad.co">
				<Image
					src="https://cdn-icons-png.freepik.com/512/7409/7409148.png"
					className="relative left-24 mr-3 h-6 sm:h-12"
					alt="Panda Logo"
				/>
				<span className="relative left-24 self-center whitespace-nowrap text-xl font-semibold dark:text-white text-pink-700">
					Panda
				</span>
			</NavbarBrand>
			<div className="relative right-24 flex md:order-2">
				<Button onClick={() => router.push("/dashboard")}>
					Dashboard
				</Button>
				<NavbarToggle />
			</div>
				<NavbarToggle />
			<NavbarCollapse>
				{menu.map((item, index) => (
					<NavbarLink
					key={index}
						as={Link}
						href={item.path}
						active={item.path === pathname}
					>
						{item.name}
					</NavbarLink>
				))}
			</NavbarCollapse>
		</Navbar>
	);
}
