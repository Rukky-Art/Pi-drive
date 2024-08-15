import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import PaymentPage from './pages/PaymentPage';
import Forget from './components/forget';
import CardDetails from './components/cardDetails';
import CardPin from './components/cardPin';
import TryAgain from './components/tryAgain';
import WelcomePage from './components/welcomePage';
import About from './pages/About';
import ResetPassword from './components/reset';

function App() {
    return (
        <Router>
            <div>
                
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/welcomePage" element={<WelcomePage />} />
                    <Route path="/book" element={<Book />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="/forget" element={<Forget />} />
                    <Route path="/cardDetails" element={<CardDetails />} />
                    <Route path="/cardPin" element={<CardPin />} />
                    <Route path="/tryAgain" element={<TryAgain />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/reset" element={<ResetPassword />} />
                    



                </Routes>
                
            </div>
        </Router>

    );
}

export default App;