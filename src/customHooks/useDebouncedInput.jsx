import { useState, useEffect } from "react";

export function useDebouncedInput(value) {

    const [returnValue, setReturnValue] = useState('')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setReturnValue(value)
        }, 1000)

        return () => clearTimeout(timeoutId)
    }, [value])

    return returnValue
}