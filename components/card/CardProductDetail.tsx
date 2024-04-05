import { Card } from "flowbite-react";

type PropsType = {
	title: string;
	image: string;
	desc: string;
};

export default function CardComponent({
	title,
	image,
	desc,
}: PropsType) {
	return (
		<Card className="max-w-sm p-4" imgSrc={image} horizontal>
			<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
			<p className="font-normal text-gray-700 dark:text-gray-400">
				{desc}
			</p>
		</Card>
	);
}
