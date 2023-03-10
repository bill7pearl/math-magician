import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <>
      <nav>
        <div className="header">
          <h1 className="title">Math Magicians</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Calculator">Calculator</Link></li>
            <li><Link to="/Quote">Quote</Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
      <footer><p>Math Magicians © 2023</p></footer>
    </>
  );
}
export default App;
