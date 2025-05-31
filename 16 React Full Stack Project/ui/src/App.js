import './App.css';
import HomeComponent from './Components/HomeComponent';
import LoginComponent from './Components/LoginComponent';
import RegistrationComponent from './Components/RegistrationComponent';
import UserNavbar from './Components/UserNavbar';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <UserNavbar/>
        <Routes>
          <Route path = '/' element = {<HomeComponent/>} />
          <Route path='/user/login' element = {<LoginComponent/>} />
          <Route path='/user/register' element = {<RegistrationComponent/>} />
          <Route path='/user/verifyEmail' element = {<LoginComponent/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
