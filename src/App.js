// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Products from './pages/Products'; 
import Travel from './pages/Travel'; 
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import AccessibilityStatement from './pages/AccessibilityStatement';
import TermsAndConditions from './pages/TermsAndConditions'; 

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/Products" element={<Products/>} /> 
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} /> 
        <Route path="/Travel" element={<Travel/>} /> 
        <Route path="/AccessibilityStatement" element={<AccessibilityStatement/>} /> 
        <Route path="/TermsAndConditions" element={<TermsAndConditions/>} /> 
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;