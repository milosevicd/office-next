"use client";

import { Product } from "@/types/product";
import { useState, useEffect } from "react";
import { FiEye } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import TableTemplate from "./TableTemplate";

const TableProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const columns = [
    { header: "Product", width: "220px" },
    { header: "Reference", width: "150px" },
    { header: "Status", width: "120px" },
    { header: "Actions" },
  ];

  const getCellContents = (product: Product): React.ReactNode[] => [
    // Product column
    <>
      <h5 className="text-dark dark:text-white">{product.name}</h5>
      <p className="mt-[3px] text-body-sm font-medium">${product.price}</p>
    </>,

    // Reference column
    <p className="text-dark dark:text-white">
      {product.referenceManufacturers}
    </p>,

    // Status column
    <p
      className={`inline-flex rounded-full px-3.5 py-1 text-body-sm font-medium ${
        product.isActive === true
          ? "bg-[#219653]/[0.08] text-[#219653]"
          : product.isActive === false
            ? "bg-[#D34053]/[0.08] text-[#D34053]"
            : "bg-[#FFA70B]/[0.08] text-[#FFA70B]"
      }`}
    >
      {product.isActive ? "Active" : "Inactive"}
    </p>,

    // Actions column
    <div className="flex items-center justify-end space-x-3.5">
      <button className="hover:text-primary">
        <FiEye size={20} />
      </button>
      <button className="hover:text-primary">
        <FiTrash2 size={20} />
      </button>
      <button className="hover:text-primary">
        <FiDownload size={20} />
      </button>
    </div>,
  ];

  return (
    <TableTemplate
      items={products}
      columns={columns}
      getCellContents={getCellContents}
    />
  );
};

export default TableProducts;
