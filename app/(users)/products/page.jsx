import ProductList from "./ProductList";

const Products = async ({searchParams}) => {
  const SearchParams = await searchParams
  console.log("outer: ",SearchParams)

  const category = SearchParams?.category || "all";
  const sort = SearchParams?.sort || "defult";
  const page = SearchParams?.page || 1;
  return (
    <>
    <div>
      <ProductList/>
      showing {category} products, sorted by {sort}, page {page}
    </div>
    </>
  )
}

export default Products
