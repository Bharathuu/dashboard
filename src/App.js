import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
    return (
        <div className="app">
            <Header />
            <div className="container">
                <Sidebar />
                <MainContent />
            </div>
            <Footer />
        </div>
    );
}

export default App;