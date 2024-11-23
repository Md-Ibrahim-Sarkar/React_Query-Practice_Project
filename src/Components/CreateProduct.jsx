
import SubmitForm from "./SubmitForm"
import Details from "./Details"
import ProductList from "./ProductList"
import { useContext } from "react"
import { ProductContext } from "../Context/Context"



function CreateProduct() {
const{id} = useContext(ProductContext)
    return (
        <div className="p-4 container mx-auto  ">
            {/* First Grid */}
            <div className="grid grid-cols-12 gap-4 mb-6">
                <div className="col-span-3 bg-gray-100 p-4 rounded shadow">
                    <SubmitForm />
                </div>
                <div className="col-span-6 flex justify-center ">

                    <ProductList />
                </div>
                <div className="col-span-3">
                    <Details id={id} />
                </div>
            </div>




        </div>
    )
}

export default CreateProduct