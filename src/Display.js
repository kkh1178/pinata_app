import React, { useState, useEffect } from "react";
import { Button, Form, Input, Label } from "semantic-ui-react";

const Display = ({ url }) => {
    return <img src={url}></img>;
};

export default Display;
