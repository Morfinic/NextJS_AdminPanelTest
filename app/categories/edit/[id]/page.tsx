"use client";
import {getCategoryById} from "@/api/calls/Categories";
import CategoryForm from "@/components/CategoryForm";
import {usePathname} from "next/navigation";

export default async function EditCategory(){
  const path: string = usePathname()
  const id: string = path.slice(path.lastIndexOf("/") + 1, path.length)
  const category = await getCategoryById(id)

  return (
    <>
      <h1>Edit Category</h1>
      {category && (
        <CategoryForm {...category} />
      )}
    </>
  )
}