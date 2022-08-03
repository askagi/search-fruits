import { useContext } from 'react';
import ProductContext from '../../contexts/ProductContext';
import IconClose from '../../assets/close.svg';
import './styles.css'

export function Header() {
    const { inputValue, setInputValue, handleFilter, clear } = useContext(ProductContext);

    return (
        <header>
            <input
                className='input-search'
                type="text"
                placeholder="Search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => handleFilter(e)}
            />
            {inputValue.trim() &&
                <img
                    className='icon-close-search'
                    src={IconClose}
                    alt='close search'
                    onClick={clear}
                />
            }
        </header>
    )
}