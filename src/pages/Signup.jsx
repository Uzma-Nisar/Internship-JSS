import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  FiUser, 
  FiLock, 
  FiMail, 
  FiEye, 
  FiEyeOff,
  FiCreditCard,
  FiCalendar
} from 'react-icons/fi';
import PricingModal from './PricingModal';
import './Signup.css';

const Signup = () => {
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Selected plan state tracking name, price, and plan type ('free', 'monthly', 'yearly')
  const [selectedPlan, setSelectedPlan] = useState({ 
    name: 'Free Access', 
    price: '$0.00',
    type: 'free',
    description: 'Explore selected foundation courses for three months.'
  });

  // URL query parameter check karne ke liye taake modal se wapas aate hi plan update ho jaye
  useEffect(() => {
    const planParam = searchParams.get('plan');
    if (planParam === 'monthly') {
      setSelectedPlan({
        name: 'Premium Monthly',
        price: '$50.00',
        type: 'monthly',
        description: 'Full learning access with monthly billing.'
      });
    } else if (planParam === 'yearly') {
      setSelectedPlan({
        name: 'Premium Yearly',
        price: '$549.00',
        type: 'yearly',
        description: 'Build long-term skills with yearly premium access.'
      });
    } else {
      setSelectedPlan({
        name: 'Free Access',
        price: '$0.00',
        type: 'free',
        description: 'Explore selected foundation courses for three months.'
      });
    }
  }, [searchParams]);
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    confirmEmail: '',
    careerGoals: '',
    source: '',
    agreeTerms: false,
    cardNumber: '',
    expiryDate: '',
    cvc: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const hasLength = formData.password.length >= 8;
  const hasUppercase = /[A-Z]/.test(formData.password);
  const hasNumber = /[0-9]/.test(formData.password);
  const hasSymbol = /[^A-Za-z0-9]/.test(formData.password);

  const handlePlanSelect = (planName, price) => {
    let type = 'free';
    let description = 'Explore selected foundation courses for three months.';

    const lowerName = planName.toLowerCase();

    if (lowerName.includes('monthly')) {
      type = 'monthly';
      description = 'Full learning access with monthly billing.';
    } else if (lowerName.includes('yearly')) {
      type = 'yearly';
      description = 'Build long-term skills with yearly premium access.';
    }

    setSelectedPlan({ 
      name: planName, 
      price: price, 
      type: type,
      description: description
    });
    setIsPricingOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.username) newErrors.username = 'Username is required';
    if (!hasLength || !hasUppercase || !hasNumber || !hasSymbol) newErrors.password = 'Password requirements not met';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.email) newErrors.email = 'Email is required';
    if (formData.email !== formData.confirmEmail) newErrors.email = 'Emails do not match';
    if (!formData.careerGoals) newErrors.careerGoals = 'Please enter your career goals';
    if (!formData.source) newErrors.source = 'Please select an option';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';

    if (selectedPlan.type !== 'free') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiration date is required';
      if (!formData.cvc) newErrors.cvc = 'CVC is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(`Account successfully created with ${selectedPlan.name}!`);
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="main-content-area">
        <div className="signup-card animate-slide-up">
          <div className="signup-header">
            <h2>Create Your Account</h2>
            <p>Join thousands of learners building job-ready IT skills.</p>
          </div>

          {/* Membership Information Box */}
          <div className="membership-info-box">
            <div className="membership-info-header">
              <h3>Membership Information</h3>
              <button type="button" className="change-plan-link-btn" onClick={() => setIsPricingOpen(true)}>
                Change Plan
              </button>
            </div>
            
            <p className="membership-desc">
              You have selected the <strong>{selectedPlan.name}</strong>. {selectedPlan.description}
            </p>

            {selectedPlan.type !== 'free' && (
              <div className="membership-price-tag">
                The price for membership is <strong>{selectedPlan.price}</strong> per {selectedPlan.type === 'yearly' ? 'year' : 'month'}.
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="signup-form" autoComplete="off">
            <div className="form-group">
              <label>Username *</label>
              <div className="input-box">
                <FiUser className="input-icon" />
                <input 
                  type="text" 
                  name="new_username_field"
                  autoComplete="off"
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
              </div>
              {errors.username && <span className="error-msg">{errors.username}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Password *</label>
                <div className="input-box">
                  <FiLock className="input-icon" />
                  <input 
                    type={showPassword ? "text" : "password"}
                    name="new_password_field"
                    autoComplete="new-password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                  <span className="toggle-eye" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </span>
                </div>
                <div className="password-criteria">
                  <span className={`criteria-chip ${hasLength ? 'met' : ''}`}>8+ characters</span>
                  <span className={`criteria-chip ${hasUppercase ? 'met' : ''}`}>1 uppercase letter</span>
                  <span className={`criteria-chip ${hasNumber ? 'met' : ''}`}>1 number</span>
                  <span className={`criteria-chip ${hasSymbol ? 'met' : ''}`}>1 symbol</span>
                </div>
              </div>

              <div className="form-group">
                <label>Confirm Password *</label>
                <div className="input-box">
                  <FiLock className="input-icon" />
                  <input 
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  />
                  <span className="toggle-eye" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </span>
                </div>
                {errors.confirmPassword && <span className="error-msg">{errors.confirmPassword}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address *</label>
                <div className="input-box">
                  <FiMail className="input-icon" />
                  <input 
                    type="email" 
                    name="new_email_field"
                    autoComplete="off"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>Confirm Email Address *</label>
                <div className="input-box">
                  <FiMail className="input-icon" />
                  <input 
                    type="email" 
                    placeholder="Re-enter your email"
                    value={formData.confirmEmail}
                    onChange={(e) => setFormData({...formData, confirmEmail: e.target.value})}
                  />
                </div>
                {errors.confirmEmail && <span className="error-msg">{errors.confirmEmail}</span>}
              </div>
            </div>

            {/* PAYMENT INFORMATION SECTION */}
            {selectedPlan.type !== 'free' && (
              <div className="payment-section-wrapper animate-slide-up">
                <hr className="form-divider" />
                <div className="additional-title">PAYMENT INFORMATION</div>

                <div className="form-group">
                  <label>Card Number *</label>
                  <div className="input-box">
                    <FiCreditCard className="input-icon" />
                    <input 
                      type="text" 
                      placeholder="1234 1234 1234 1234"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                    />
                    <button type="button" className="autofill-card-btn">Autofill ›</button>
                  </div>
                  {errors.cardNumber && <span className="error-msg">{errors.cardNumber}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Expiration Date *</label>
                    <div className="input-box">
                      <FiCalendar className="input-icon" />
                      <input 
                        type="text" 
                        placeholder="MM / YY"
                        value={formData.expiryDate}
                        onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                      />
                    </div>
                    {errors.expiryDate && <span className="error-msg">{errors.expiryDate}</span>}
                  </div>

                  <div className="form-group">
                    <label>CVC *</label>
                    <div className="input-box">
                      <FiLock className="input-icon" />
                      <input 
                        type="text" 
                        placeholder="CVC"
                        value={formData.cvc}
                        onChange={(e) => setFormData({...formData, cvc: e.target.value})}
                      />
                    </div>
                    {errors.cvc && <span className="error-msg">{errors.cvc}</span>}
                  </div>
                </div>
              </div>
            )}

            <hr className="form-divider" />
            <div className="additional-title">ADDITIONAL DETAILS</div>

            <div className="form-group">
              <label>What are your career goals? *</label>
              <textarea 
                placeholder="Tell us what you're hoping to achieve..."
                rows="4"
                value={formData.careerGoals}
                onChange={(e) => setFormData({...formData, careerGoals: e.target.value})}
              ></textarea>
              {errors.careerGoals && <span className="error-msg">{errors.careerGoals}</span>}
            </div>

            <div className="form-group">
              <label>How did you find out about jobskillshare.org? *</label>
              <select 
                value={formData.source}
                onChange={(e) => setFormData({...formData, source: e.target.value})}
              >
                <option value="">Select an option</option>
                <option value="Google Search">Google Search</option>
                <option value="Social Media">Social Media</option>
                <option value="YouTube">YouTube</option>
                <option value="Friend or Colleague">Friend or Colleague</option>
                <option value="Online Ad">Online Ad</option>
                <option value="Other">Other</option>
              </select>
              {errors.source && <span className="error-msg">{errors.source}</span>}
            </div>

            <div className="terms-group">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({...formData, agreeTerms: e.target.checked})}
                />
                I agree to the <a href="#terms">Terms</a> *
              </label>
              {errors.agreeTerms && <span className="error-msg">{errors.agreeTerms}</span>}
            </div>

            <button type="submit" className="create-account-submit-btn">
              Create Account
            </button>
          </form>

          <div className="login-redirect">
            <span>Already have an account?</span>
            <button 
              type="button" 
              className="login-redirect-btn" 
              onClick={() => navigate('/login')}
            >
              Log in here
            </button>
          </div>
        </div>
      </div>

      <PricingModal 
        isOpen={isPricingOpen} 
        onClose={() => setIsPricingOpen(false)} 
        onPlanSelect={handlePlanSelect} 
      />
    </div>
  );
};

export default Signup;