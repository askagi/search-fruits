import { useContext } from 'react';
import ProductContext from '../../contexts/ProductContext';
import './styles.css';

export function Products() {
    const { filtered } = useContext(ProductContext);

    return (
        <div className="content">
            <ul>
                {filtered.map(fruit => (
                    <li key={fruit.id} className="card">
                        <div className="image" style={{ backgroundImage: `url(${fruit.image})` }}></div>
                        <p>{fruit.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
