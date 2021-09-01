import React, { useState, useEffect } from "react";
import FormData from "form-data";
import { Button, Form, Input, Label } from "semantic-ui-react";

// import { Button, Form, Input, Label } from "semantic-ui-react";

const Pin = () => {
    // Pinata api keys
    const pinata_api_key = process.env.REACT_APP_PINATA_API_KEY;
    const pinata_secret_api_key = process.env.REACT_APP_PINATA_SECRET_API_KEY;

    // state for handling the file
    const [file, setFile] = useState("null");

    //
    const onFileChange = (event) => {
        // event.preventDefault();
        console.log(event);
        setFile(event.target.value);
    };

    const onFileUpload = () => {
        const data = new FormData();
        const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
        data.append("file", file, file.name);

        const metadata = JSON.stringify({
            name: file.name,
        });

        console.log(file);

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
                pinata_api_key: pinata_api_key,
                pinata_secret_api_key: pinata_secret_api_key,
            },
        };

        fetch(url, requestOptions, file);
    };

    return (
        <Form>
            <Form.Field>
                <label>Upload Content:</label>
                <Input type="file" onChange={onFileChange}></Input>
                <Button></Button>
            </Form.Field>
        </Form>
    );
};

export default Pin;
