
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Products from "./pages/Products";
import Blog from "./pages/Blog";

import { Routes, Route } from 'react-router-dom'
import Forum from "./pages/Forum";
import Projects from "./pages/Projects";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/forum' element={<Forum />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/blog' element={<Blog />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;