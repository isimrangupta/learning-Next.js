"use client"

import { useSearchParams } from 'next/navigation'

const ProductList = () => {
  const serchParams = useSearchParams();
  const pages = serchParams.getAll("page");
  const category = serchParams.get("category");
  console.log("pages: ", pages);
  console.log("category: ", category);
  return (
    <>
      <h1>Client {category} and {pages}</h1>
    </>
  )
}

export default ProductList;
