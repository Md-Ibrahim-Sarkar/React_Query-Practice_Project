import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Item from "./Item";
import { useContext } from "react";
import { ProductContext } from "../Context/Context";

const getData = async ({ queryKey }) => {

  const response = await axios.get(`http://localhost:8000/products/?_page=${queryKey[1].page}&_per_page=6`);

  
  return response.data;
};



function ProductList() {
  const { page, setPage } = useContext(ProductContext);

  const { data: products, isFetching, error } = useQuery({
    queryKey: ['products', {page}],
    queryFn: getData,
  });
  console.log(products);
  
  if(isFetching) return <div>Products is Leading...</div>

  return (
    <>
      {
        !error && (

          <div className="flex flex-col">
            <div>

              <div className="grid grid-cols-12 gap-4">
                {products && products?.data.map((item) => <Item key={item.id} item={item} />)}
              </div>

            </div>

            <div className="mt-4 flex justify-center gap-4">
              {
                products.prev &&
                 <button
                 onClick={() => setPage(products.prev)}
                 className={`px-3 py-1 rounded-md font-semibold ${page === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-lime-600 hover:scale-105"
                   }`}
               >
                 Prev
               </button>
             }
              {
                products.next && 
                <button
                onClick={() => setPage(products.next)}
                className={`px-3 py-1 rounded-md font-semibold`}
              >
                Next
              </button>
              }
            </div>
          </div>
        )
      }
    </>
  );
}

export default ProductList;

