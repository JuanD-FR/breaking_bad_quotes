import { useState } from "react"


export const useCounter = ( inicitalValue = 10) => {

    const [counter, setCounter] = useState(inicitalValue);

    const increment = ( value = 1 ) => {
        setCounter(counter + value);
    }

    const decrement = (value = 1) => {
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(inicitalValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }

}