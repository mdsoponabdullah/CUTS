import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

import SignupAs from './pages/SignupAs';
import Signup from './pages/signup';
import Error from './pages/error';
import Login from './pages/Login';
import LoginAs from './pages/LoginAs';
import Profile from './pages/Profile';
import Users from './pages/Users';
import SelectUsers from './pages/selectUsers';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route  path='/signupAs' element={<SignupAs /> } />
        <Route  path='/signup' element={ <Signup /> } />
        <Route  path='/' element={ <Home /> } />
        <Route  path='/login' element={ <Login/> } />
        <Route  path='/loginAs' element={ <LoginAs /> } />
        <Route path ='/profile' element={ <Profile /> } />
        <Route path ='/users' element={ <Users /> } />
        <Route path ='/selectUsers' element={ <SelectUsers /> } />
        <Route  path='*' element={<Error /> } />
      </Routes>
    </BrowserRouter>  
    
   
  );
}

export default App;
