import { useEffect, useState } from "react";
import { dbFruits } from '../db/fruits';

function useProductProvider() {

    const [fruits, setFruits] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleFilter = (e) => {
        const filterItem = [];
        dbFruits.forEach(item => {
            if (item.name.toLowerCase().includes(e.target.value.toLowerCase())) {
                filterItem.push(item);
            }
        });
        if (e.target.value.trim()) {
            setFruits([...filterItem]);
        }

        if (!e.target.value.trim()) {
            setFruits([...dbFruits]);
            setInputValue('');
        }
    }

    const clear = () => {
        setInputValue('');
        setFruits([...dbFruits]);
    }

    useEffect(() => {
        setFruits([...dbFruits]);
    }, [])


    return {
        fruits,
        setFruits,
        inputValue,
        setInputValue,
        handleFilter,
        clear
    }
}

export default useProductProvider;