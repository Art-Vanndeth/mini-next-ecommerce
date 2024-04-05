"use client";

import { Sidebar } from "flowbite-react";

import Link from "next/link";
import { MenuList } from "./menu";
import React, { useState } from "react";

type MenuItem = {
	name: string;
	path: string;
	icon: React.ElementType;
};

export default function SideBarComponent() {
	const [menuList, setMenuList] = useState<MenuItem[]>(MenuList);
	return (
		<Sidebar aria-label="Default sidebar example">
			<Sidebar.Items>
				<Sidebar.ItemGroup>
					{menuList.map((item, index) => (
						<Sidebar.Item
							key={index}
							as={Link}
							href={item.path}
							icon={item.icon}
						>
							{item.name}
						</Sidebar.Item>
					))}
				</Sidebar.ItemGroup>
			</Sidebar.Items>
		</Sidebar>
	);
}



import { Carousel } from "flowbite-react";

function Component() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
}
