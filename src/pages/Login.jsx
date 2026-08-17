import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PricingModal from './PricingModal'; // <-- 1. Import PricingModal
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  // Login Form States
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // 2. Pricing Modal State
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  // Forgot Password Modal States
  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [forgotStep, setForgotStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
  const [resetEmail, setResetEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [resetSuccessMessage, setResetSuccessMessage] = useState('');

  // OTP States
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [demoCode, setDemoCode] = useState('');
  const [otpError, setOtpError] = useState('');

  // New Password States
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const otpRefs = useRef([]);

  // Timer effect for Step 2
  useEffect(() => {
    let interval = null;
    if (isForgotOpen && forgotStep === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [isForgotOpen, forgotStep, timer]);

  // Handle Login Form Submit with Email Validation
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(identifier)) {
      setLoginError('Please enter a valid email address (e.g. you@example.com)');
      return;
    }
    setLoginError('');
    setSuccessMessage('Login Successful! Redirecting...');
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  // Step 1: Send Code Validation
  const handleSendCode = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(resetEmail)) {
      setEmailError('Please enter a valid email address (e.g. you@example.com)');
      return;
    }
    setEmailError('');
    
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    setDemoCode(randomCode);
    setOtpError('');

    setForgotStep(2);
    setTimer(30);
    setCanResend(false);
  };

  // Handle OTP digit change
  const handleOtpChange = (value, index) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1].focus();
    }
  };

  // Handle OTP Submit / Verify with validation
  const handleVerifyCode = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    if (enteredOtp.length < 6) {
      setOtpError('Please enter all 6 digits.');
      return;
    }
    if (enteredOtp !== demoCode) {
      setOtpError('Invalid verification code. Please check the correct code below.');
      return;
    }
    setOtpError('');
    setForgotStep(3);
  };

  // Resend code logic
  const handleResendCode = () => {
    setTimer(30);
    setCanResend(false);
    setOtp(['', '', '', '', '', '']);
    setOtpError('');
    
    const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    setDemoCode(randomCode);

    alert('A new code has been sent!');
  };

  // Step 3: Set New Password
  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();
    if (newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return;
    }
    setPasswordError('');
    setResetSuccessMessage('Password reset successfully! You can now log in.');
    
    setTimeout(() => {
      setIsForgotOpen(false);
      setForgotStep(1);
      setResetEmail('');
      setNewPassword('');
      setConfirmPassword('');
      setOtp(['', '', '', '', '', '']);
      setResetSuccessMessage('');
    }, 2000);
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-card">
        <div className="login-header">
          <h2>Welcome back</h2>
          <p>Log in to keep going with your program, labs, and progress.</p>
        </div>

        {loginError && <div className="error-banner">{loginError}</div>}
        {successMessage && <div className="success-banner" style={{ background: '#e6f4ea', color: '#137333', padding: '10px', borderRadius: '6px', marginBottom: '15px', textAlign: 'center', fontWeight: '500' }}>{successMessage}</div>}

        <form onSubmit={handleLoginSubmit} className="login-form" autoComplete="off">
          <div className="input-group">
            <label>Username or Email</label>
            <div className="input-field-wrapper">
              <span className="input-icon">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
              </span>
              <input 
                type="text" 
                name="no-autofill-identifier"
                autoComplete="off"
                required
                placeholder="you@example.com" 
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group">
            <div className="label-row">
              <label>Password</label>
              <button type="button" className="forgot-link" onClick={() => { setIsForgotOpen(true); setForgotStep(1); setOtpError(''); setResetSuccessMessage(''); }}>
                Forgot password?
              </button>
            </div>
            <div className="input-field-wrapper">
              <span className="input-icon">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              </span>
              <input 
                type={showPassword ? "text" : "password"} 
                name="no-autofill-password"
                autoComplete="new-password"
                required
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/></svg>
                ) : (
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                )}
              </span>
            </div>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                checked={rememberMe} 
                onChange={(e) => setRememberMe(e.target.checked)} 
              />
              <span>Remember me</span>
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Sign In <span>&gt;</span>
          </button>
        </form>

        <div className="divider-container">
          <span className="divider-line"></span>
          <span className="divider-text">New to EdTech4D?</span>
          <span className="divider-line"></span>
        </div>

        {/* 3. Replaced Link with Button to open Pricing Modal */}
        <button type="button" className="create-account-btn" onClick={() => setIsPricingOpen(true)}>
          Create an Account
        </button>
      </div>

      {/* 4. Render Pricing Modal */}
      <PricingModal isOpen={isPricingOpen} onClose={() => setIsPricingOpen(false)} />

      {/* Forgot Password Modal */}
      {isForgotOpen && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="modal-close" onClick={() => setIsForgotOpen(false)}>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            {resetSuccessMessage && (
              <div className="success-banner" style={{ background: '#e6f4ea', color: '#137333', padding: '12px', borderRadius: '6px', marginBottom: '15px', textAlign: 'center', fontWeight: '500' }}>
                {resetSuccessMessage}
              </div>
            )}

            {!resetSuccessMessage && (
              <>
                <div className="step-indicators">
                  <span className={`dot ${forgotStep === 1 ? 'active' : forgotStep > 1 ? 'completed' : ''}`}></span>
                  <span className={`dot ${forgotStep === 2 ? 'active' : forgotStep > 2 ? 'completed' : ''}`}></span>
                  <span className={`dot ${forgotStep === 3 ? 'active' : ''}`}></span>
                </div>

                {forgotStep === 1 && (
                  <form onSubmit={handleSendCode}>
                    <div className="modal-header">
                      <h3>Reset your password</h3>
                      <p>Enter the email linked to your account and we'll send you a 6-digit verification code.</p>
                    </div>

                    <div className="input-group">
                      <label>Email</label>
                      <div className="input-field-wrapper">
                        <span className="input-icon">
                          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        </span>
                        <input 
                          type="text" 
                          required
                          placeholder="you@example.com" 
                          value={resetEmail}
                          onChange={(e) => setResetEmail(e.target.value)}
                        />
                      </div>
                      {emailError && <span className="field-error-text">{emailError}</span>}
                    </div>

                    <button type="submit" className="submit-btn">
                      Send code <span>&gt;</span>
                    </button>
                  </form>
                )}

                {forgotStep === 2 && (
                  <form onSubmit={handleVerifyCode}>
                    <div className="modal-header">
                      <h3>Enter verification code</h3>
                      <p>We sent a 6-digit code to <strong>{resetEmail}</strong>.</p>
                    </div>

                    {otpError && <div className="error-banner">{otpError}</div>}

                    <div className="otp-container">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          required
                          value={digit}
                          ref={(el) => (otpRefs.current[index] = el)}
                          onChange={(e) => handleOtpChange(e.target.value, index)}
                          className="otp-input"
                        />
                      ))}
                    </div>

                    <div className="demo-banner">
                      Demo mode — no email server connected. Your code is <strong>{demoCode}</strong>.
                    </div>

                    <button type="submit" className="submit-btn">
                      Verify code
                    </button>

                    <div className="otp-footer-actions">
                      {canResend ? (
                        <button type="button" className="resend-btn-active" onClick={handleResendCode}>
                          Resend code
                        </button>
                      ) : (
                        <span className="timer-text">Resend code ({timer}s)</span>
                      )}

                      <button 
                        type="button" 
                        className="diff-email-btn" 
                        onClick={() => { setForgotStep(1); setOtp(['','','','','','']); setOtpError(''); }}
                      >
                        Use a different email
                      </button>
                    </div>
                  </form>
                )}

                {forgotStep === 3 && (
                  <form onSubmit={handleResetPasswordSubmit}>
                    <div className="modal-header">
                      <h3>Set a new password</h3>
                      <p>Choose a strong password you haven't used before.</p>
                    </div>

                    {passwordError && <div className="error-banner">{passwordError}</div>}

                    <div className="input-group">
                      <label>New password</label>
                      <div className="input-field-wrapper">
                        <span className="input-icon">
                          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                        </span>
                        <input 
                          type={showNewPassword ? "text" : "password"} 
                          required
                          placeholder="At least 8 characters" 
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <span className="eye-icon" onClick={() => setShowNewPassword(!showNewPassword)}>
                          {showNewPassword ? (
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/></svg>
                          ) : (
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="input-group">
                      <label>Confirm new password</label>
                      <div className="input-field-wrapper">
                        <span className="input-icon">
                          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                        </span>
                        <input 
                          type={showConfirmPassword ? "text" : "password"} 
                          required
                          placeholder="Re-enter your new password" 
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <span className="eye-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                          {showConfirmPassword ? (
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/></svg>
                          ) : (
                            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                          )}
                        </span>
                      </div>
                    </div>

                    <button type="submit" className="submit-btn">
                      Reset password
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;