import {getCategories} from "@/api/calls/Categories";
import Link from "next/link";
import CategoryForm from "@/components/CategoryForm";

export default async function Categories() {
  const categories = await getCategories()

  return (
    <>
      <h1>Categories</h1>

      <CategoryForm />

      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Product name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {categories.map(
            (category: any) => (
              <tr key={category._id}>
                <td>{category.name}</td>
                <td>
                  <Link href={`/categories/edit/${category._id}`}>Edit</Link>
                  <Link href={`/categories/delete/${category._id}`}>Delete</Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  )
}