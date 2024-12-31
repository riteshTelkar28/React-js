import React from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function MainComponent(){
    return(<>
        <div className='container-fluid' style={{backgroundColor:"red"}}>
            <p>This is an example of React with Bootstap</p>
            <div className='container' style={{backgroundColor:"green"}}>
                <p>This is an example of react with bootstrap</p>
                <div>This is an example of react with bootstrapThis is an example of react with bootstrapThis is an example of react with bootstrapThis is an example of react with bootstrap</div>
            </div>
        </div>
    </>)
}
createRoot(document.getElementById("root")).render(<MainComponent/>);