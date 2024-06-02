"use client";
import {deleteProduct, getProductById} from "@/api/calls/Products";
import {usePathname, useRouter} from "next/navigation"

export default async function DeleteProducts() {
  const router = useRouter()

  const path: string = usePathname()
  const id: string = path.slice(path.lastIndexOf("/") + 1, path.length)
  const product = await getProductById(id)

  function goBack(){
    return router.push("/products")
  }

  async function delProduct(){
    await deleteProduct(id);
    return router.push("/products")
  }

  return (
    <>
      <h1 className="text-center">Do you really want to delete product &quot;{product.name}&quot;</h1>

      <div className="flex gap-2 justify-center">
        <button className="btn-red" onClick={delProduct}>Yes</button>
        <button className="btn-default" onClick={goBack}>No</button>
      </div>
    </>
  )
}