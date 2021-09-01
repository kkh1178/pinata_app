import React, { useState } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import Display from "./Display";

function Lookup() {
    const [hash, setHash] = useState(null);
    const [url, setUrl] = useState("");

    const getHash = async () => {
        await fetch(`https://gateway.pinata.cloud/ipfs/${hash}`).then(function (
            response
        ) {
            console.log(response);
            setUrl(response.url);
        });
    };
    return (
        <Form>
            <Form.Field>
                <label>Content identifier: </label>
                <Input
                    maxLength="46"
                    minLength="46"
                    label="hash"
                    labelPosition="right"
                    onChange={(event) => setHash(event.target.value)}
                ></Input>
            </Form.Field>
            <Button onClick={getHash} primary>
                Submit
            </Button>
            <Display url={url} />
        </Form>
    );
}

export default Lookup;

// const [data, setData] = useState(null);

// useEffect(() => {
//     const url = `https://api.pinata.cloud/data/testAuthentication`;
//     const pinata_api_key = process.env.REACT_APP_PINATA_API_KEY;
//     const pinata_secret_api_key =
//         process.env.REACT_APP_PINATA_SECRET_API_KEY;

//     fetch(`${url}`, {
//         headers: {
//             pinata_api_key: pinata_api_key,
//             pinata_secret_api_key: pinata_secret_api_key,
//         },
//     })
//         .then((res) => res.json())
//         .then((json) => setData(json))
//         .catch((err) => console.log(err));
// }, []);

//     return (
//         <div>
//             <h3>
//                 Making suring my API keys are working:{" "}
//                 {JSON.stringify(data.message)}
//             </h3>

//             <
//         </div>
//     );
