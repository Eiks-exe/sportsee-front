import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import UserPage from './pages/UserPage';
import { UserContextProvider } from './context/UserContext';


function App() {
  const paramId = useParams()
  console.log(paramId)
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/user/:id' element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
