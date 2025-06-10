import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';
import Footer from './components/Footer';
import Breeds from './pages/Breeds'; // 👈 Make sure this path is correct
import About from './pages/About';
import Services from './pages/Service'; 
import Contact from './pages/Contact'// 👈 Make sure this path is correct
import  Orders  from './pages/Orders'
import Appointments from './pages/Appointments';
import Help from './pages/Help'; // 👈 Make sure this path is correct
// 👈 Make sure this path is correct
// 👈 Make sure this path is correct
// // 👈 Make sure this path is correct

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
};


// Keep existing components
// (Removed duplicate Services and Contact components)

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="app">
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <Sidebar isOpen={isSidebarOpen} />
        
        <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <Routes>
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
            <Route path="/Orders" element={<Orders />} /> 
            <Route path="/Appointments" element={<Appointments />} />
            <Route path="/Help" element={<Help />} /> {/* Assuming Contact is used for help */}
            {/* Add more routes as needed */}
            {/* Example: <Route path="/some-other-page" element={<SomeOtherPage />} /> */}
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;