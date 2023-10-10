import { useState, useEffect } from 'react'

function useFetch() {

    const [loadin, setLoadin] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect((url, options) => {

        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setData(data);
                setLoadin(false);

            } catch (error) {

                setError(error);
                setLoadin(false);
            }
        }

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return { data, loadin, error };
}

export default useFetch
