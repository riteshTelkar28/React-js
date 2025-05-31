import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import store from './store/store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudentForm';
import ViewStudent from './components/ViewStudent';

function MyComponent(){
    return(
        <>
            <Provider store = {store}>
             <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/loginStudent' element={<Login/>} />
                    <Route path='/addStudent' element={<AddStudent/>} />  
                    <Route path='/viewStudent' element={<ViewStudent/>} />  
                    <Route path='/updateStudent' element={<UpdateStudent/>} /> 
                    <Route path='/logout' element={<Login/>} />    
                </Routes>
              </Router>
            </Provider>
        </>
    )
}

createRoot(document.getElementById("root")).render(<MyComponent/>)