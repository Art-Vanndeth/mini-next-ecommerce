import CardComponent from "@/components/card/CardProductDetail";
import { Metadata, ResolvingMetadata } from "next";
import { BASE_URL } from "@/lib/constants";

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

const ENDPOINT = `${BASE_URL}/api/products/`;

const getData = async (id: string) => {
	const res = await fetch(`${ENDPOINT}${id}`);
	const data = await res.json();
	console.log(data);
	return data;
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const id = params.id;
	const product = await fetch(`${BASE_URL}/api/products/${id}`).then((res) => res.json());

	return {
		title: product.name,
		description: product.desc,
		openGraph: {
			images: product.image,
		},
	};
}

export default async function Detail(props: Props) {
	let data = await getData(props.params.id);

	return (
		<div className="h-screen grid place-content-center">
			<CardComponent
				title={data?.name || "Noname"}
				desc={data?.desc || "No Description"}
				image={
					data?.image ||
					"https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
				}
			/>
		</div>
	);
}
