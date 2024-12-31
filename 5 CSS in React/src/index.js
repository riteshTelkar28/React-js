
import React from "react";
import ReactDom from 'react-dom';
import { createRoot } from "react-dom/client";
import styled from "styled-components";

const MyParagraph = styled.p`
font-size:30px;
font-family:candara;
text-decoration:underline;
`
const data = <MyParagraph>Hello there</MyParagraph>
createRoot(document.getElementById("root")).render(data);