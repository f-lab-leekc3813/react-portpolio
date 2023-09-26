import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './component/home/Home.container';

function App():JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}

export default App;
