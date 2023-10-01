import { useEffect, useState } from 'react'

const useDevice = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        defineIsMobile();
        window.addEventListener("resize", defineIsMobile);
    }, []);

    const defineIsMobile = () => {
        if (window.innerWidth >= 1024) {
            setIsMobile(false)
        } else {
            setIsMobile(true)
        }
    }

    return {isMobile}; 
}

export default useDevice;