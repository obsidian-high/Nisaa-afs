import { useState, useEffect } from 'react';
import { supabase } from '../config/supabase';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Supabase automatically exchanges the token in the URL hash for a session
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY' && session) {
        setSessionReady(true);
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
      setTimeout(() => navigate('/admin'), 3000);
    }
    setLoading(false);
  };

  return (
    <PageTransition>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--cream-bg)'
      }}>
        <div style={{
          background: 'white',
          padding: '50px 40px',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          width: '100%',
          maxWidth: '400px',
          textAlign: 'center'
        }}>
          <i className="fas fa-lock" style={{ fontSize: '2.5rem', color: 'var(--deep-purple)', marginBottom: '20px' }}></i>
          <h2 style={{ fontFamily: 'var(--font-head)', color: 'var(--deep-purple)', marginBottom: '10px' }}>
            Reset Password
          </h2>

          {success ? (
            <div>
              <i className="fas fa-check-circle" style={{ fontSize: '3rem', color: '#27ae60', marginBottom: '15px' }}></i>
              <p style={{ color: '#27ae60', fontWeight: '600', marginBottom: '10px' }}>Password updated successfully!</p>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Redirecting you to the admin login...</p>
            </div>
          ) : !sessionReady ? (
            <div>
              <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '20px' }}>
                Verifying your reset link...
              </p>
              <i className="fas fa-spinner fa-spin" style={{ fontSize: '1.5rem', color: 'var(--deep-purple)' }}></i>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p style={{ color: '#888', marginBottom: '25px', fontSize: '0.9rem' }}>
                Enter your new password below.
              </p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New password (min 8 characters)"
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  marginBottom: '12px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  marginBottom: '15px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              {error && (
                <p style={{ color: '#e74c3c', fontSize: '0.85rem', marginBottom: '15px' }}>
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: 'var(--deep-purple)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.7 : 1
                }}
              >
                {loading ? 'Updating...' : 'Set New Password'}
              </button>
            </form>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default ResetPassword;
