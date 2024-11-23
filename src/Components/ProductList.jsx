
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import Item from "./Item"

const getData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products?limit=12')
    return response.data
}


function ProductList() {

    const { data: products, isFetching, error } = useQuery({
        queryKey: ['products'],
        queryFn: getData,
    })

    if (isFetching) return <div><h1>Product is Leading</h1></div>
    if (error) return <div>Something Error: {error.message}</div>

  return (
    <div className="grid grid-cols-12 gap-3 ">
                        
      {products &&
       products.map(item => <Item key={item.id} item={item} />)
      }
     </div>
  )
}

export default ProductList