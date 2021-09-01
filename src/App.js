import React, { useEffect, useState } from "react";
import Lookup from "./Lookup";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Pin from "./pin";

// import axios from "axios";

const App = () => {
    const url = `https://gateway.pinata.cloud/ipfs`;
    return (
        <Container>
            <Lookup></Lookup>
            <Pin></Pin>
        </Container>
    );
};
export default App;
