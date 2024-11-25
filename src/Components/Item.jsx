/* eslint-disable react/prop-types */

import { useContext } from "react"
import { ProductContext } from "../Context/Context"

 
function Item({item}) {

  
  const {setId} = useContext(ProductContext)
    return (
        <div  onClick={() => setId(item.id)} className=" col-span-4 cursor-pointer  w-full max-h-[300px] transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img className="h-[150px] lg:w-[400px] xl:w-[500px] object-cover object-center" src={item.image} alt="Product Image" />
                <h2 className="mb-2 mt-2 px-1 text-lg lg:text-xs font-medium text-nowrap dark:text-white text-gray-900">{item.title.slice(0,20)}...</h2>
            <div className="p-4">
                
                <button className="py-2 px-3 w-2/3 lg:w-full lg:ms-0 ms-9 mt-4 mx-auto rounded-lg text-sm  hover:scale-105  bg-green-500 ">See Details</button>
            </div>
        </div>
    )
}

export default Item