import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Registration from './Registration';
import Login from './Login';


function App() {
  return (<>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/registration' element={<Registration/>} />
    </Routes>
  </>);
}

export default App;
