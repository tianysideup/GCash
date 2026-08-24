import React, { useState } from 'react';
import { 
  Wifi, 
  Battery, 
  Signal, 
  ArrowRight, 
  ShieldCheck
} from 'lucide-react';
import gcashLogo from '../assets/gcash-logo.png';

export default function LoginMobileScreen({ onNavigateMpinLogin }) {
  const [phone, setPhone] = useState('917 882 9140');

  return (
    <div className="gcash-screen-container">
      {/* Mobile Status Bar */}
      <div className="mobile-status-bar">
        <span>9:41</span>
        <div className="status-icons">
          <Signal size={14} />
          <Wifi size={14} />
          <Battery size={14} />
        </div>
      </div>

      {/* Screen Header Branding with Official Logo */}
      <div className="screen-header-brand">
        <img src={gcashLogo} alt="GCash" className="gcash-header-logo-img" />
        <p className="gcash-brand-subtitle">Finance SuperApp</p>
      </div>

      {/* Blueish Content Sheet */}
      <div className="screen-white-sheet">
        <h2 className="screen-title">Welcome to GCash!</h2>
        <p className="screen-subtitle">
          Enter your registered 11-digit mobile number to log in to your account.
        </p>

        {/* Mobile Number Field */}
        <div className="form-field-group">
          <label className="input-label" htmlFor="mobile-input">Mobile Number</label>
          <div className="phone-input-container">
            <div className="country-flag-badge">
              <span>🇵🇭</span>
              <span>+63</span>
            </div>
            <input
              id="mobile-input"
              type="tel"
              className="static-input-text"
              placeholder="9XX XXX XXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <button 
          type="button" 
          className="btn-gcash-primary"
          onClick={onNavigateMpinLogin}
        >
          <span>Next</span>
          <ArrowRight size={18} />
        </button>

        {/* Trust Badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: '24px 0 12px', color: 'rgba(255, 255, 255, 0.85)', fontSize: '12px' }}>
          <ShieldCheck size={16} color="#00D2FF" />
          <span>Secured with DoubleSafe Protection</span>
        </div>

        {/* Footer Links */}
        <div className="screen-footer-links">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '12px', marginTop: '6px' }}>
            <a href="#help" className="text-link" onClick={(e) => e.preventDefault()}>Help Center</a>
            <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>•</span>
            <a href="#terms" className="text-link" onClick={(e) => e.preventDefault()}>Terms & Privacy</a>
          </div>

          <div className="bsp-regulatory-text">
            GCash is regulated by the Bangko Sentral ng Pilipinas.
          </div>
        </div>
      </div>
    </div>
  );
}
