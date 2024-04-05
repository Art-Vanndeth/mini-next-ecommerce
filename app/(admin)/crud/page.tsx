"use client";

import React, { useEffect, useState } from "react";

const BASE_URL = "https://store.istad.co/";
const ENDPOINT = "api/products/";

const productObject = {
  id: 3,
  seller: "sang sokea",
  category: "electronics",
  name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
  desc: "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
  image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
  price: "109.00",
  quantity: 319,
  created_at: "2024-03-30T04:26:07.461155Z",
  updated_at: "2024-03-30T04:26:07.461166Z",
};

export default function Crud() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}${ENDPOINT}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>page</div>;
}
