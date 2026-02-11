import { useState, useEffect } from "react"

export function useWindowWidth() {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        // Handler to call on window resize
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler once immediately to set initial size
        handleResize();

        // Remove event listener on cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures effect runs only on mount and unmount

    return width;
};