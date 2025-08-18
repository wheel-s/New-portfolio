import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Side from './components/Side'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/contact';


function App() {
  return (
    <div className="App">
      <Side/>
  <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
