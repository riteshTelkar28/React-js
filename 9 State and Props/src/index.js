import React, { useRef, useState } from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
function MainComponent() {
    const age = useRef();
    const [Age,setAge] = useState(0);


    var handleage = ()=>{
        setAge(age.current.value);
    }
    return(<>
        <h3>useRef Example</h3>
        <input
            type="text"
            placeholder="enter age"
            ref={age}
        />
        <input
            type="submit"
            value="submit"
            onClick={handleage}
        />

        <h1> {Age?Age:''} </h1>
    </>)
}
createRoot(document.getElementById("root")).render(<MainComponent />);

