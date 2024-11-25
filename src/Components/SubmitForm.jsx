import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function SubmitForm() {
    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationKey: ['product'],
        mutationFn: (variables) => {
            return axios.post("https://all-products-8lh7.onrender.com/products", variables);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["products"]);
        }
    });

    const SubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newData = Object.fromEntries(formData);
        console.log("Form Data:", newData); // Debug here

        mutation.mutate({
            ...newData,
            id: crypto.randomUUID()
        });

        e.target.reset();
    };

    return (
        <div className="sticky top-0">
            <h2 className="font-bold text-lg mb-2 mt-4">Add a New Product</h2>
            <form method="post" onSubmit={SubmitHandler} className="flex flex-col gap-3">
                <input name="title" type="text" placeholder="Product Name" className="p-2 border rounded" />
                <input name="price" type="number" placeholder="Price" className="p-2 border rounded" />
                <input name="category" type="text" placeholder="Category" className="p-2 border rounded" />
                <input name="image" type="text" placeholder="Image link" className="p-2 border rounded" />
                <input name="rating" type="number" placeholder="Rating" className="p-2 border rounded" />
                <div className="w-full">
                    <textarea name="description" className="p-2 border rounded w-full" placeholder="Description"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
            </form>
        </div>
    );
}

export default SubmitForm;
