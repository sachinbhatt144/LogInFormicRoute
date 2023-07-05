import './App.css';
import { Route, Routes } from "react-router-dom";
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
// import { PrivateRoute } from "react-router-dom";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/signup" element={ <SignupPage setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/login" element={<LoginPage setIsLoggedIn ={setIsLoggedIn}/>}></Route>
        <Route path="/dashboard" element={<HomePage/>}/>

        <Route path="/user" element={<PrivateRoute isLoggedIn={isLoggedIn}/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
