"use client";
import { getProductById } from "@/api/calls/Products";
import {usePathname} from "next/navigation"
import ProductForm from "@/components/ProductForm";

export default async function EditProduct() {
  const path: string = usePathname()
  const id: string = path.slice(path.lastIndexOf("/") + 1, path.length)
  const product = await getProductById(id)

  return (
    <>
      <h1>Edit product</h1>
      {product && (
        <ProductForm product={product}/>
      )}
    </>
  )
}