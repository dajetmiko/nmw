import { useEffect, useState } from "react"

const useCheckOnline = () => {
  const [online, setOnline] = useState(true);
  const [inkremen, setInkremen] = useState(0)
  const [pertama, setPertama] = useState(true);
  useEffect(() => {setOnline(window.navigator.onLine); setInkremen(inkremen + 1)}, [window.navigator.onLine])
  useEffect(() => {setPertama(inkremen < 1)}, [inkremen])
  return [online, pertama]  
}

export default useCheckOnline