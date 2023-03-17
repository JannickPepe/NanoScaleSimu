
import React from "react";
import { Routes, Route } from 'react-router-dom'


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import ProjectA from "./pages/ProjectA";
import ProjectB from "./pages/ProjectB";




function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/projectA' element={<ProjectA />}/>
        <Route path='/projectB' element={<ProjectB />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/blog' element={<Blog />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;