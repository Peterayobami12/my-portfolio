import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from '../Portfolio/Home';
import About from '../Portfolio/About';
import Contact from '../Portfolio/Contact';
import Project from '../Portfolio/Project';
import { Route, Routes ,BrowserRouter as Router} from 'react-router-dom';

export default function App(){
    return(
  <>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/project' element={<Project />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
  </Routes>
  </>
    )
}