"use client";
import { ProductType } from "@/lib/definitions";
import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Button, Modal } from "flowbite-react";
import Image from "next/image";
import SearchComponent from "@/components/main/SearchComponent";
import { useRouter } from "next/navigation";
import { BASE_URL, ACCESS_TOKEN } from "@/lib/constants";

const ENDPOINT = `${BASE_URL}/api/products/?page=1&page_size=100`;


export default function Dashboard() {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [openModal, setOpenModal] = useState(false);
	const [productDetail, setProductDetail] = useState<ProductType | null>(null);
	const router = useRouter();
	const[openModalEdit,setModalProductEdit]=useState(false)
  const[productEdit,setProductEdit]=useState<ProductType>()

	// fetch products
	useEffect(() => {
		setLoading(true);
		fetch(`${ENDPOINT}`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.results);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, []);

	const [imagePlaceholder, setImagePlaceholder] = useState<string>(
		"https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
	);

	const handleViewProduct = (product: ProductType) => {
		setProductDetail(product);
		setOpenModal(true);
	};

	const handleDeleteProduct = async (product: ProductType) => {
		if(!ACCESS_TOKEN){
			window.confirm(`${product.name} belong to other seller...!`);
		}else{
			const confirmDelete = window.confirm(`Are you sure you want to delete ${product.name}?`);
			if (confirmDelete) {
				try {
				  const response = await fetch(`${BASE_URL}/api/products/${product.id}/`, {
					method: 'DELETE',
					headers: {
					  'Content-Type': 'application/json',
					  Authorization: `Bearer ${ACCESS_TOKEN}`
					}
				  });
			
				  if (response.ok) {
					setProducts(products.filter(p => p.id !== product.id));
					console.log('Product deleted successfully');
				  } else {
					const data = await response.json();
					console.error('Error deleting product:', data.error);
				  }
				} catch (error) {
				  console.error('Error deleting product:', error);
				}
			  }
		}
	};

	const handleFilterProductName = (productName: string) => {
		const filteredProducts = products.filter(product =>
		  product.name.toLowerCase().includes(productName.toLowerCase())
		);
		setProducts(filteredProducts);
	};
	const columns: TableColumn<ProductType>[] = [
		{
			name: "Product Title",
			selector: (row) => row.name,
		},
		{
			name: "Price (USD)",
			selector: (row) => row.price,
			sortable: true,
		},
		
		{
			name: "Category",
			selector: (row) => row.category,
			sortable: true,
		},
		{
			name: "Thumnail",
			selector: (row): any => (
				<Image className="w-16 h-16" src={row.image} alt={row.image} />
			),
			sortable: true,
		},
		{
			name: "Action",
			selector: (row): any => (
				<div>
					<button
						onClick={() => handleViewProduct(row)}
						className="text-gray-200 mx-2 w-16 h-10 rounded-lg bg-blue-600"
					>
						view
					</button>
					<button onClick={() =>router.push(`edit/${row.id}`)} className="text-gray-200 mx-2 w-16 h-10 rounded-lg bg-yellow-400">edit</button>
					<button onClick={() => handleDeleteProduct(row)} className="text-gray-200 mx-2 w-16 h-10 rounded-lg bg-red-600">delete</button>
				</div>
			),
		},
	];

	return (
		<main className="h-screen">
			<section className="flex">
				<button onClick={() => router.push("/products")} className="text-gray-100 m-10 w-44 h-12  rounded-lg bg-pink-600">Create New Product</button>
				<SearchComponent onFilter={handleFilterProductName} />
			</section>
			<DataTable
				fixedHeader
				progressPending={loading}
				columns={columns}
				data={products}
				pagination
				customStyles={customStyles}
				striped
				highlightOnHover
			/>
			<Modal show={openModal} onClose={() => setOpenModal(false)}>
				<Modal.Header>Product Detial</Modal.Header>
				<Modal.Body>
					<div className="space-y-6">
						<Image
							src={productDetail?.image || imagePlaceholder}
							alt={productDetail?.name || "Untitle"}
							width={600}
							height={400}
						/>
						<h3 className="text-3xl text-gray-700">{productDetail?.name || "Untitle"}</h3>
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							{productDetail?.desc || "No description"}
						</p>
						
					</div>
				</Modal.Body>
			</Modal>
		</main>
	);
}

const customStyles = {
	rows: {
		style: {
			minHeight: "72px", // override the row height
		},
	},
	headCells: {
		style: {
			paddingLeft: "38px", // override the cell padding for head cells
			paddingRight: "8px",
			fontSize: "1.2rem",
			backgroundColor: "#f1f1f1",
		},
	},
	cells: {
		style: {
			paddingLeft: "38px", // override the cell padding for data cells
			paddingRight: "8px",
		},
	},
};


