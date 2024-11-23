

function SubmitForm() {
    return (
        <div className="sticky top-0 ">
            <h2 className="font-bold text-lg mb-2 mt-4">Add a New Product</h2>
            <form className="flex flex-col gap-3">
                <input type="text" placeholder="Product Name" className="p-2 border rounded" />
                <input type="text" placeholder="price" className="p-2 border rounded" />
                <input type="text" placeholder="category" className="p-2 border rounded" />
                <input type="text" placeholder="image" className="p-2 border rounded" />
                <input type="email" placeholder="rating" className="p-2 border rounded" />
                <textarea name="description" className="p-2 border rounded" placeholder="description" id=""></textarea>
                <button className="bg-blue-500 text-white p-2 rounded">Submit</button>
            </form>
        </div>
    )
}

export default SubmitForm