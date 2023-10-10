import { useState, useEffect } from 'react'

function useFetch(url, opt) {

    const [loadin, setLoadin] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                fetch(url, opt)
                    .then((res) => res.json())
                    .then((data) => {
                        setData(data);
                        setLoadin(false);
                    });

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
