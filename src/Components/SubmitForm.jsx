import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";


function SubmitForm() {
  
    const queryClient = useQueryClient()
    
    const mutation = useMutation({
        mutationKey: ['product'],
        mutationFn: (variables) => { return axios.post("http://localhost:8000/products", variables) },
        onSuccess: (data, variables, context) => {
            queryClient.invalidateQueries(["products"])
        }
    })
    const SubmitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newData = Object.fromEntries(formData)
        mutation.mutate({
            ...newData,
            id: crypto.randomUUID()
        })
    }

    return (
        <div className="sticky top-0 ">
            <h2 className="font-bold text-lg mb-2 mt-4">Add a New Product</h2>
            <form onSubmit={SubmitHandler} className="flex flex-col gap-3">
                <input name="title" type="text" placeholder="Product Name" className="p-2 border rounded" />
                <input name="price" type="number" placeholder="Price" className="p-2 border rounded" />
                <input name="category" type="text" placeholder="Category" className="p-2 border rounded" />
                <input name="image" type="text" placeholder="Image link" className="p-2 border rounded" />
                <input name="rating" type="number" placeholder="Rting" className="p-2 border rounded" />
                <div className="w-full">
                    <textarea name="description" className="p-2 border rounded w-full" placeholder="Description" id=""></textarea>
                </div>
                <button type="" className="bg-blue-500 text-white p-2 rounded">Submit</button>
            </form>
        </div>
    )
}

export default SubmitForm