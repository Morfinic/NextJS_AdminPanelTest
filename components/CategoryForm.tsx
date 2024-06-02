"use client";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {createCategory} from "@/api/calls/Categories";
import {categoryId} from "@/types";
import {updateProduct} from "@/api/calls/Products";

export default function CategoryForm(category: categoryId) {
  const router = useRouter()

  const [name, setName] = useState("")
  console.log(category._id)

  const handleSubmit = async() => {
    const rawData = {
      name: name,
    }

    // if(category._id){
    //   await updateProduct(category._id, rawData)
    // } else {
    //   await createCategory(rawData);
    // }

    setName("");

    return router.push("/categories")
  }

  return <>
    <form action={handleSubmit}>
      <label>Category name</label>
      <div className="flex">
        <input className="mb-0 mr-1" type="text" placeholder="category name" value={name} onChange={v => setName(v.target.value)}/>

        <button type="submit" className="btn-primary">
          Save
        </button>
      </div>
    </form>
  </>
}
