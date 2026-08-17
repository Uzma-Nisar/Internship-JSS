import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Diamond, 
  Trophy, 
  CheckCircle, 
  UserPlus, 
  Crown, 
  Lock, 
  ShieldCheck, 
  KeyRound, 
  X 
} from 'lucide-react';
import './PricingModal.css';

const PricingModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSelectPlan = (planType) => {
    onClose();
    navigate(`/signup?plan=${planType}`);
  };

  return (
    <div className="modal-overlay">
      <div className="pricing-modal-card">
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose}>
          <X size={18} />
        </button>

        {/* Header */}
        <div className="pricing-header">
          <span className="join-label">JOIN JOBSKILLSHARE</span>
          <h2>Choose how you want to learn</h2>
          <p>Create your account here. Membership and payment processing remain securely managed by Paid Memberships Pro.</p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          
          {/* Card 1: Free Access */}
          <div className="price-card">
            <div className="card-top-row">
              <div className="card-icon-box free-icon">
                <BookOpen size={20} />
              </div>
              <span className="plan-badge free-badge">START FREE</span>
            </div>
            
            <h3 className="plan-title">Free Access</h3>
            <div className="plan-price">$0.00</div>
            <div className="plan-duration">3-month access</div>
            <p className="plan-desc">Explore selected foundation courses for three months.</p>
            
            <ul className="plan-features">
              <li><CheckCircle size={15} className="check-icon" /> Selected free courses</li>
              <li><CheckCircle size={15} className="check-icon" /> Learning portal access</li>
              <li><CheckCircle size={15} className="check-icon" /> Progress tracking</li>
            </ul>

            <button className="plan-btn free-btn" onClick={() => handleSelectPlan('free')}>
              <UserPlus size={16} /> Create Free Account
            </button>
            <div className="cancel-text">
              <CheckCircle size={13} /> Cancel anytime
            </div>
          </div>

          {/* Card 2: Premium Monthly */}
          <div className="price-card">
            <div className="card-top-row">
              <div className="card-icon-box monthly-icon">
                <Diamond size={20} />
              </div>
              <span className="plan-badge monthly-badge">FLEXIBLE</span>
            </div>
            
            <h3 className="plan-title">Premium Monthly</h3>
            <div className="plan-price">$50.00</div>
            <div className="plan-duration">per month</div>
            <p className="plan-desc">Full learning access with monthly billing.</p>
            
            <ul className="plan-features">
              <li><CheckCircle size={15} className="check-icon" /> All certificate programs</li>
              <li><CheckCircle size={15} className="check-icon" /> All premium courses</li>
              <li><CheckCircle size={15} className="check-icon" /> Hands-on labs & certificates</li>
              <li><CheckCircle size={15} className="check-icon" /> AI career tools</li>
            </ul>

            <button className="plan-btn monthly-btn" onClick={() => handleSelectPlan('monthly')}>
              <Crown size={16} /> Choose Premium Monthly
            </button>
            <div className="cancel-text">
              <CheckCircle size={13} /> Cancel anytime
            </div>
          </div>

          {/* Card 3: Premium Yearly */}
          <div className="price-card yearly-card">
            <div className="card-top-row">
              <div className="card-icon-box yearly-icon">
                <Trophy size={20} />
              </div>
              <span className="plan-badge yearly-badge">BEST VALUE</span>
            </div>
            
            <h3 className="plan-title">Premium Yearly</h3>
            <div className="plan-price">$549.00</div>
            <div className="plan-duration">per year</div>
            <p className="plan-desc">Build long-term skills with yearly premium access.</p>
            
            <ul className="plan-features">
              <li><CheckCircle size={15} className="check-icon" /> All certificate programs</li>
              <li><CheckCircle size={15} className="check-icon" /> All premium courses</li>
              <li><CheckCircle size={15} className="check-icon" /> Hands-on labs & certificates</li>
              <li><CheckCircle size={15} className="check-icon" /> AI career tools</li>
            </ul>

            <button className="plan-btn yearly-btn" onClick={() => handleSelectPlan('yearly')}>
              <Diamond size={16} /> Choose Premium Yearly
            </button>
            <div className="cancel-text">
              <CheckCircle size={13} /> Cancel anytime
            </div>
          </div>

        </div>

        {/* Bottom Secure & Trusted Footer Banner */}
        <div className="secure-footer-banner">
          <div className="secure-left">
            <div className="lock-icon-box">
              <Lock size={18} />
            </div>
            <div>
              <strong>Secure & Trusted</strong>
              <p>Your membership and payment processing are securely managed by Paid Memberships Pro.</p>
            </div>
          </div>
          <div className="secure-right">
            <span><ShieldCheck size={14} /> Secure checkout</span>
            <span><KeyRound size={14} /> Encrypted payments</span>
            <span><ShieldCheck size={14} /> Privacy protected</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PricingModal;