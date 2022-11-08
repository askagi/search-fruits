import ProductContext from "../contexts/ProductContext";
import { useContext } from "react";

function useProduct() {
    return useContext(ProductContext);
}

export default useProduct;