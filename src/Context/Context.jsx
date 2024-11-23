import {  createContext, useState } from "react";



export const ProductContext = createContext()


export const ContextProvider = ({children}) => {

  const [id, setId] = useState()
 console.log(id);
 
    let value = {
        id,
      setId  
   }



    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}