import React from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import HomePage from './component/home/Home.container';
import RegisterPage from 'component/register/Register.container';

function App():JSX.Element {
  const location = useLocation();

  console.log(location.pathname)

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register/login' element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
