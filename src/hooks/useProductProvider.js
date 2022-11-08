import { useEffect, useState } from "react";
import { dbFruits } from '../db/fruits';

function useProductProvider() {

    const [fruits, setFruits] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // const filtered = fruits.filter(item => item.name.includes(inputValue));
    const filtered = fruits.filter(item => item.name.toUpperCase().includes(inputValue.toUpperCase()));

    // const filtered = fruits.filter((item) => {
    //     const name = item.name.toUpperCase()
    //     if (name.includes(inputValue.toUpperCase())) {
    //         return name
    //     }
    //     return false
    // });

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