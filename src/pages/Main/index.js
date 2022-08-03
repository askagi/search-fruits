import { Header } from '../../components/Header'
import { Products } from '../../components/Products'
import { ProductProvider } from '../../contexts/ProductContext'

export function Main() {

    return (
        <ProductProvider>
            <Header />
            <main className='layoutMain'>
                <Products />
            </main>
        </ProductProvider>


    )
}