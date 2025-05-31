import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderComponent from './HeaderComponent';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Profile from './Profile';


function App() {
  return (<>
    <Router>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/profile' element={<Profile/>} />
        
      </Routes>
    </Router>
  </>)
}

export default App;
