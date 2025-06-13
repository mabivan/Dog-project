import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';
import Footer from './components/Footer';
import Breeds from './pages/Breeds';
import About from './pages/About';
import Contact from './pages/Contact';
import Orders from './pages/Orders';
import Appointments from './pages/Appointments';
import Help from './pages/Help';
import Settings from './pages/Settings';
import Premium from './pages/Premium';
import Service from './pages/Service';
import Login from './pages/Login'
import Signup from './pages/Signup'

const MainLayout = ({ children, isSidebarOpen, toggleSidebar }: { 
  children: React.ReactNode,
  isSidebarOpen: boolean,
  toggleSidebar: () => void 
}) => (
  <div className="app">
    <Navbar toggleSidebar={toggleSidebar} />
    <Sidebar isOpen={isSidebarOpen} />
    <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {children}
    </main>
    <Footer />
  </div>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return auth.currentUser ? <>{children}</> : <Navigate to="/login" replace />;
};

const AuthRoute = ({ children }: { children: React.ReactNode }) => {
  return !auth.currentUser ? <>{children}</> : <Navigate to="/" replace />;
};

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={
          <AuthRoute>
            <Login />
          </AuthRoute>
        } />
        <Route path="/signup" element={
          <AuthRoute>
            <Signup />
          </AuthRoute>
        } />

        {/* Protected routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <MainLayout isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Home />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/breeds" element={
          <ProtectedRoute>
            <MainLayout isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Breeds />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/about" element={
          <ProtectedRoute>
            <MainLayout isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}>
              <About />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/contact" element={
          <ProtectedRoute>
            <MainLayout isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Contact />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/orders" element={
          <ProtectedRoute>
            <MainLayout isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Orders />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/appointments" element={
          <ProtectedRoute>
            <MainLayout isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Appointments />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/help" element={
          <ProtectedRoute>
            <MainLayout isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Help />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/settings" element={
          <ProtectedRoute>
            <MainLayout isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Settings />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/premium" element={
          <ProtectedRoute>
            <MainLayout isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Premium />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="/service" element={
          <ProtectedRoute>
            <MainLayout isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Service />
            </MainLayout>
          </ProtectedRoute>
        } />
        
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default App;