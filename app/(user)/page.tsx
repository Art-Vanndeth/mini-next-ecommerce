"use client";
import CardProduct from "@/components/card/CardProduct";
import HeroComponent from "@/components/main/HeroCompoent";
import { BASE_URL } from "@/lib/constants";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ENDPOINT = `${BASE_URL}/api/products/?page=1&page_size=30`;

export default function Home() {
	const [products, setProducts] = useState([]);
	const router = useRouter();

	useEffect(() => {
		fetch(ENDPOINT)
			.then((res) => res.json())
			.then((data) => setProducts(data.results));
	}, []);
	
	return (
		<main className="flex-1">
			<HeroComponent/>
			<h1 className="mx-24 text-4xl font-semibold">Popular Products</h1>
			<section className="mt-6 container mx-auto grid grid-cols-1 sm:grid-cols-2 grid-flow-row gap-4 md:grid-cols-4">
			{products.map((product: any, index) => (
				<CardProduct
					onClick={() => router.push(`/product/${product.id}`)}
					key={index}
					name={product.name}
					image={product.image}
					price={product.price}
				/>
			))}
			</section>
		</main>
		
	);
}


 