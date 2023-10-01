import { useEffect, useState } from 'react'

export const useFetch = (url: string) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            
            try {
                const res = await fetch(url)
                const json = await res.json();
                setData(json)
            } catch (error) {
                setError("Houve algum error ao carregar os dados")
            }

            setLoading(false)
        }
        fetchData();
    }, [url]);


    return {data, loading, error};
}