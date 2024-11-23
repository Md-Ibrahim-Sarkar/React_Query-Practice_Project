import CreateProduct from "./Components/CreateProduct";
import { ContextProvider } from "./Context/Context";


const App = () => {


  return (
    <ContextProvider>

      <CreateProduct />
      
  </ContextProvider>
  );
};

export default App;
