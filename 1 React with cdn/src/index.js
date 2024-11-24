import react from 'react';
import ReactDOM from 'react-dom';
import CarClassComponent from './CarClassComponent';
import CarFunctionalComponent from './CarFunctionalComponent';
import {createRoot} from 'react-dom/client';

function MainComponent(){
    return(<>
        <CarClassComponent/>
        <CarFunctionalComponent/>
    </>)
}

// ReactDOM.render(<MainComponent/>,document.getElementById("demo"));
createRoot(document.getElementById("demo")).render(<MainComponent/>);