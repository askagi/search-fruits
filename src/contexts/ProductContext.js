import { createContext } from 'react';
import useProductProvider from '../hooks/useProductProvider';

const ProductContext = createContext();

export function ProductProvider(props) {
    const productProvider = useProductProvider();

    return (
        <ProductContext.Provider value={productProvider}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContext;