import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;