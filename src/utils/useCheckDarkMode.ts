import { storeDarkMode } from "@/store/actions/ui"
import { IRootRedux } from "@/store/reducers"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"


function useCheckDarkMode(){
    const darkMode = useSelector((state: IRootRedux) => state?.ui?.darkMode || false)
    const dispatch = useDispatch()
    const setDarkMode = (dm: boolean) => dispatch(storeDarkMode(dm))
    useEffect(() => {
        const handelEvent = (event: MediaQueryListEvent) => {
            setDarkMode(event.matches )
        }
      
        const removeListener = () => {
            window.matchMedia && 
                window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handelEvent);
        }
    
        removeListener()
        window.matchMedia && 
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handelEvent);
        return removeListener
    }, [darkMode])
  
    return [darkMode, setDarkMode] as [boolean, typeof setDarkMode]
}

export default useCheckDarkMode