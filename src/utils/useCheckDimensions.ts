

import { useState, useEffect } from "react";


export default function useScreenDimensions(){
    const [screenDimensions, setDimensiLayar] = useState({screenWidth: 1000, screenHeigth: 0})

    useEffect(() => {
        function getScreenDimensions(){
            const { innerWidth: screenWidth, innerHeight: screenHeigth } = window;
            return{
                screenWidth,
                screenHeigth
            }
        }
        
        function handelResize(){
            setDimensiLayar(getScreenDimensions())
        }
        window.addEventListener('resize', handelResize)
        return () => window.removeEventListener('resize', handelResize)
    }, [])

    return screenDimensions
}

export type TOrienLayar = 'landscape' | 'portrait'
