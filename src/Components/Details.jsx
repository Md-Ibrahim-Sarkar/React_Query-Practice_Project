import { useQuery } from "@tanstack/react-query"
import axios from "axios"



const getData = async ({ queryKey }) => {

    const response = await axios.get(`https://all-products-8lh7.onrender.com/products/${queryKey[1]}`)
    return response.data
}

function Details({ id }) {

    const { data: product, isFetching, error } = useQuery({
        queryKey: ['Product', id],
        queryFn: getData
    })


    if (isFetching) return <div>Details is Leading...</div>
    if (error) return <div>Something id wrong {error.message}</div>
    return (
        <>
            {!error && (
                <div className=" bg-white p-4 rounded shadow sticky top-0 h-screen">
                    <h2 className="font-bold text-lg mb-4">Product Details</h2>
                    <div className="w-full flex justify-center">
                        <img className="max-h-[150px] object-cover" src={product.image} alt="" />
                    </div>
                    <p><strong>Name: </strong>{product.title}</p>
                    <div className="flex items-center mb-3">
                        <p className="mr-2 text-lg font-semibold text-gray-900">Price: ${product.price}</p>
                        <p className="ml-auto text-base font-medium text-green-500">20% off</p>
                    </div>
                    <p><strong>Description: </strong>{product.description}</p>
                </div>

            )}
        </>
    )
}

export default Details