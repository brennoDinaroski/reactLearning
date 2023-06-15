import { useState } from "react"; 

export const useCounter = (initialValue = 0) => {
    const [valueCounter, setValueCounter] = useState(initialValue)

    console.log(valueCounter, typeof(valueCounter));

    const sum = () => {
        setValueCounter((valueCounter) => valueCounter+1,console.log(valueCounter + 1))
    }

    const subtract = () => {
        setValueCounter((valueCounter) => valueCounter-1, console.log(valueCounter - 1))
    }

    return {valueCounter, sum, subtract}

}