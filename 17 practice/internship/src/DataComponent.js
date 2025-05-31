import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return { data, loading };
}

function DataComponent() {
    const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table border="1">
                    <thead>
                        <tr>
                            <th>userId</th>
                            <th>Id</th>
                            <th>title</th>
                            <th>body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default DataComponent;
