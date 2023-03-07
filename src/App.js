import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/home';
import About from './routes/about';
import Menu from './routes/menu';
import OurStores from './routes/our-stores';
import ContactHours from './routes/contact-hours';
import Error from './routes/error';
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about-us">
            <Route index element={<About />} />
            {/* <Route path="hi" element={<h1>hi</h1>} /> */}
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/about-us/hi" element={<h1>hi</h1>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/our-stores" element={<OurStores />} />
          <Route path="/contact-hours" element={<ContactHours />} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;