import React, { useState } from "react";
import FormData from "form-data";
import axios from "axios";
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

        setFile(event.target.files[0]);
    };

    const onFileUpload = async () => {
        let data = new FormData();
        const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
        data.append("file", file, { filepath: file.name });

        // // Pinata optional metadata
        // const metadata = JSON.stringify({
        //     name: file.name,
        // });

        // data.append("pinataMetadata", metadata);

        // Axios request options for the post
        // const requestOptions = {
        //     //this is needed to prevent axios from erroring out with large files
        //     maxBodyLength: "Infinity",
        //     headers: {
        //         "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        //         pinata_api_key: pinata_api_key,
        //         pinata_secret_api_key: pinata_secret_api_key,
        //     },
        // };
        const metadata = JSON.stringify({
            name: file.name,
        });
        data.append("pinataMetadata", metadata);

        //pinataOptions are optional
        const pinataOptions = JSON.stringify({
            cidVersion: 1,
        });
        data.append("pinataOptions", pinataOptions);

        await axios
            .post(url, data, {
                //this is needed to prevent axios from erroring out with large files
                maxContentLength: -1,
                headers: {
                    "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
                    pinata_api_key: pinata_api_key,
                    pinata_secret_api_key: pinata_secret_api_key,
                    path: file.name,
                },
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <Form>
            <Form.Field>
                <label>Upload Content:</label>
                <Input type="file" onChange={onFileChange}></Input>
                <Button onClick={onFileUpload}>Upload</Button>
            </Form.Field>
        </Form>
    );
};

export default Pin;
