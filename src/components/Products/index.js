import { useContext, useEffect } from 'react';
import ProductContext from '../../contexts/ProductContext';
import './styles.css';

function Products() {
    const { fruits } = useContext(ProductContext);
    return (
        <div className="content">
            <ul>
                {fruits.map(fruit => (
                    <li key={fruit.id} className="card">
                        <div className="image" style={{ backgroundImage: `url(${fruit.image})` }}></div>
                        <p>{fruit.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products