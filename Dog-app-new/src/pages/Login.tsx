import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try { 
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err:any) {
      console.log("err", err.message)
      setError('Failed to login. Please check your email or password and try again.');
      console.error(err.message);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h6>TRINITY DOGS </h6>
        <h2>Login To Get Access</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
            {/*Email*/}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          {/*password*/}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>

          {/*Button*/}
          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        {/*paragraph*/}
        <p className="auth-link">
          Don't have an account? <Link to ="/signup">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;