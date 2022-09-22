import React, { Component } from "react";
import ISshop from "./IS shop";
import Nav from "./Nav";
import About from "./About";
import Blog from "./Blog";
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

function App() {
    return (
       <BrowserRouter>
          <div className="App">
           {/* <ISshop /> */}
           <Nav />
          <Routes>
          <Route path="/" element={<Home/>} />
           <Route path="/blog" element={<Blog/>} />
           <Route path="/about" element={<About/>} />
          </Routes>
       </div> 
       </BrowserRouter>   
    );
}

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <p>This is home page</p>
        </div>
    )
}

export default App;
