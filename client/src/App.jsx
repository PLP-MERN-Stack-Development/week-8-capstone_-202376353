import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginPage from "./pages/LoginPage";
import LeaveForm from "./pages/LeaveForm";
import AdminDashboard from "./pages/AdminDashboard";
import Dashboard from "./pages/Dashboard";
import { AuthProvider, useAuth } from './context/AuthContext';
import RegisterPage from "./pages/RegisterPage";

// Protected Route for Logged-in Users
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
};

// Protected Route for Admin Only
const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  return user && user.role === 'Admin' ? children : <Navigate to="/dashboard" />;
};



function App() {
  console.log('App Rendered');
  return (
    <>
      <Toaster position="top-center" />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/form" element={
              <ProtectedRoute>
                <LeaveForm />
              </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin" element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            } />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
