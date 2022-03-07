import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedPage from './components/ProtectedPage';
import Main from './components/Main';
import GuardedRoute from './GuardedRoute';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <hr />
        <Routes>
            <Route exact path='/' element={<Main />} />
            <Route path='/login' element={<Login authenticate={setIsAuthenticated} />} />
            <Route path='/protected' element={<GuardedRoute isAuthenticated={isAuthenticated}><ProtectedPage /></GuardedRoute>} />
        </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default App;
