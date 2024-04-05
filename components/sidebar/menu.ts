import {
	HiArrowSmRight,
	HiChartPie,
	HiInbox,
	HiShoppingBag,
	HiTable,
	HiUser,
	HiViewBoards,
	HiHome,
} from "react-icons/hi";

export const MenuList = [
	{
		name: "Dashboard",
		path: "/dashboard",
		icon: HiChartPie,
	},
	{
		name: "Setting",
		path: "/setting",
		icon: HiViewBoards,
	},
	{
		name: "Inbox",
		path: "#",
		icon: HiInbox,
		label: "3",
	},
	{
		name: "Users",
		path: "#",
		icon: HiUser,
	},
	{
		name: "Products",
		path: "#",
		icon: HiShoppingBag,
	},
	{
		name: "Sign In",
		path: "#",
		icon: HiArrowSmRight,
	},
	{
		name: "Sign Up",
		path: "#",
		icon: HiTable,
	},
	{
		name: "Home",
		path: "/",
		icon: HiHome,
	},
];
