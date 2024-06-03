import { getProducts } from "@/api/calls/Products";
import Link from "next/link";
import Image from "next/image"

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
            <td>Image</td>
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
                <td>
                  {product.category ?
                    <>
                      {product.category.name}
                      <p>Properties:</p>
                      {product.properties.map((el: any) => (
                        <p key={el._id}>{el.key}: {el.vals}</p>
                      ))}
                    </> :
                    "null" }
                </td>
                <td>
                  <Image
                    src={product.imageUrl}
                    width={150}
                    height={150}
                    alt="product_img" />
                </td>
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