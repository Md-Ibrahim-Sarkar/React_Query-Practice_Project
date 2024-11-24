import {  createContext, useState } from "react";



export const ProductContext = createContext()


export const ContextProvider = ({children}) => {

  const [id, setId] = useState(1)
  const [page, setPage] = useState(2)
 
    let value = {
        id,
        setId,
        page,
        setPage
   }



    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}