import { useQuery } from "@tanstack/react-query"
import axios from "axios"



const getData = async ({queryKey}) => {
    
    const response = await axios.get(`https://fakestoreapi.com/products/${queryKey[1]}`)
    return response.data
 }

function Details({id}) {

    const {data: product,isFetching,error } = useQuery({
        queryKey: ['Product', id],
        queryFn: getData
    })


    if (isFetching) return <div>Details is Leading...</div>
    if (error) return <div>Something id wrong {error.message}</div>
    return (
        <div className=" bg-white p-4 rounded shadow sticky top-0">
            <h2 className="font-bold text-lg mb-4">Product Details</h2>
            <img src={product.image} alt="" />
            <p><strong>Name:</strong>{product.title}</p>
            <p><strong>description:</strong>{product.description}</p>
            <p><strong>Email:</strong></p>
        </div>
    )
}

export default Details