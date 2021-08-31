import React, { useEffect, useState } from "react";

// import axios from "axios";

const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = `https://api.pinata.cloud/data/testAuthentication`;
        const pinata_api_key = process.env.REACT_APP_PINATA_API_KEY;
        const pinata_secret_api_key =
            process.env.REACT_APP_PINATA_SECRET_API_KEY;

        fetch(`${url}`, {
            headers: {
                pinata_api_key: pinata_api_key,
                pinata_secret_api_key: pinata_secret_api_key,
            },
        })
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch((err) => console.log(err));
    }, []);

    return <div>{JSON.stringify(data)}</div>;
};

export default App;
