import { useEffect, useState } from "react";
import { dbFruits } from '../db/fruits';

function useProductProvider() {

    const [fruits, setFruits] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const filtered = fruits.filter(item => item.name.includes(inputValue));

    useEffect(() => {
        setFruits([...dbFruits]);
    }, [])


    return {
        fruits,
        setFruits,
        inputValue,
        setInputValue,
        filtered
    }
}

export default useProductProvider;