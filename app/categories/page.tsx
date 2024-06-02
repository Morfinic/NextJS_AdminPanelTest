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
            <td>Properties</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {categories.map(
            (category: any) => (
              <tr key={category._id}>
                <td>{category.name}</td>
                <td>
                  {category.properties.map(
                    (obj: Object) => (
                      <div key={obj._id}>
                        <p>Name: {obj.key}</p>
                        <p>Properties:
                        {obj.vals.map(
                          (el: String) => (
                            <p key={el}>{el}</p>
                        )
                        )}</p>
                      </div>
                    )
                  )}
                </td>
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