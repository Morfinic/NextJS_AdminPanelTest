"use client";
import {useRouter} from "next/navigation";
import {createProduct, updateProduct} from "@/api/calls/Products";
import {ProductId} from "@/types";
import {getCategories} from "@/api/calls/Categories";
import {useState} from "react";

export default async function ProductForm(product: ProductId) {
  const router = useRouter()

  const [name, setName] = useState(product.name || "");

  const categories = await getCategories();

  console.log(product._id)

  const handleSubmit = async (formData: FormData) => {
    const rawData = {
      name: name,
      description: formData.get("description"),
      price: formData.get("price"),
      category: formData.get("category")
    }

    if (product._id) {
      await updateProduct(product._id, rawData)
    } else {
      await createProduct(rawData)
    }

    return router.push("/products")
  }

  return <>
    <form action={handleSubmit}>
      <label>Product name</label>
      <input type="text" placeholder="product name" value={name} onChange={v => v.target.value}/>

      <label>Category</label>
      <select name="category">
        <option value="">Uncategorized</option>
          {categories.map((c: any) => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
      </select>

      <label>Description</label>
      <textarea placeholder="description" name="description"></textarea>

      <label>Price</label>
      <input type="number" step="0.01" placeholder="price" name="price"/>

      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  </>
}
