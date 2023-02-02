import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';

import Signup from './pages/signup';
import Error from './pages/error';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route  path='/signup' element={<Signup /> } />
        <Route  path='/' element={ <Home /> } />
        <Route  path='*' element={<Error /> } />
      </Routes>
    </BrowserRouter>  
    
   
  );
}

export default App;
