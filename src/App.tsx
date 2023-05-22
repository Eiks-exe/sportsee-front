import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import UserPage from './pages/UserPage';
import { UserContextProvider } from './context/UserContext';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/user/:id' element={<UserPage />} />
          <Route path='/' element={<Navigate to='/user/12' />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
