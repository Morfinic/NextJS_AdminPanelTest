import { getProducts } from "@/api/calls/Products";
import Link from "next/link";

export default async function Products(){
  const products = await getProducts()

  return (
    <>
      <Link href="/products/new" className="btn-primary">
      Add new products
      </Link>

      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Product name</td>
            <td>Description</td>
            <td>Price</td>
            <td>Category</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map(
            (product: any) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.category.name}</td>
                <td>
                  <Link href={`/products/edit/${product._id}`}>Edit</Link>
                  <Link href={`/products/delete/${product._id}`}>Delete</Link>
                </td>
              </tr>
              )
            )}
          </tbody>
      </table>
    </>
  )
}