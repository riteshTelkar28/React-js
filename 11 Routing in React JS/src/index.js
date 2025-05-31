import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import HeaderComponent from './Components/HeaderComponent';
// import {  Route, MemoryRouter as Router, Routes } from 'react-router-dom';
// import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {  Route, HashRouter as Router, Routes } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import AboutComponent from './Components/AboutComponent';
import ContactComponent from './Components/ContactComponent';
import ContactComponent1 from './Components/ContactComponent1';
import ContactComponent2 from './Components/ContactComponent2';


function MainComponent(){
    return(<>
        <Router>
            <HeaderComponent/>
            <Routes>
                <Route path='/' element={<HomeComponent/>}/>
                <Route path='/about' element={<AboutComponent/>}/>
                <Route path='/contact' element={<ContactComponent/>}>
                    <Route path='contactComponent1' element={<ContactComponent1/>}/>
                    <Route path='contactComponent2' element={<ContactComponent2/>}/>
                </Route>
            </Routes>
        </Router>
    </>)
}

createRoot(document.getElementById("root")).render(<MainComponent/>);