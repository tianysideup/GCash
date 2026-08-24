import React, { useState } from 'react';
import { 
  Wifi, 
  Battery, 
  Signal, 
  Delete, 
  Fingerprint
} from 'lucide-react';
import gcashLogo from '../assets/gcash-logo.png';

export default function LoginMpinScreen({ onNavigateMobileLogin, onLoginSuccess }) {
  const [pin, setPin] = useState('');

  const handleKeyClick = (val) => {
    if (pin.length < 4) {
      const nextPin = pin + val;
      setPin(nextPin);
      if (nextPin.length === 4 && onLoginSuccess) {
        setTimeout(() => {
          onLoginSuccess();
        }, 200);
      }
    }
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
  };

  const handleBiometric = () => {
    setPin('2814');
    if (onLoginSuccess) {
      setTimeout(() => {
        onLoginSuccess();
      }, 200);
    }
  };

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
        {/* User Greeting Pill */}
        <div className="user-greeting-box">
          <div className="user-info">
            <div className="user-avatar-sm">CR</div>
            <div>
              <div className="user-name-text">Christian Reyes</div>
              <div className="user-phone-text">+63 917 ••• 9140</div>
            </div>
          </div>
          <button 
            type="button" 
            className="switch-account-link"
            onClick={onNavigateMobileLogin}
          >
            Switch
          </button>
        </div>

        {/* MPIN Visual Indicator */}
        <div className="mpin-display-wrapper">
          <div className="mpin-label">Enter 4-Digit MPIN</div>
          <div className="mpin-dots-row">
            <div className={`mpin-dot ${pin.length >= 1 ? 'filled' : ''}`} />
            <div className={`mpin-dot ${pin.length >= 2 ? 'filled' : ''}`} />
            <div className={`mpin-dot ${pin.length >= 3 ? 'filled' : ''}`} />
            <div className={`mpin-dot ${pin.length >= 4 ? 'filled' : ''}`} />
          </div>
        </div>

        {/* Virtual Numeric Keypad */}
        <div className="numeric-keypad-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              type="button"
              className="keypad-btn"
              onClick={() => handleKeyClick(num.toString())}
            >
              {num}
            </button>
          ))}
          
          <button 
            type="button" 
            className="keypad-btn action-key"
            title="Biometric Fingerprint / Face ID"
            onClick={handleBiometric}
          >
            <Fingerprint size={24} />
          </button>
          
          <button
            type="button"
            className="keypad-btn"
            onClick={() => handleKeyClick('0')}
          >
            0
          </button>
          
          <button
            type="button"
            className="keypad-btn action-key"
            onClick={handleBackspace}
            title="Backspace"
          >
            <Delete size={22} />
          </button>
        </div>

        {/* Footer Links */}
        <div className="screen-footer-links">
          <a href="#forgot" className="text-link" onClick={(e) => e.preventDefault()}>
            Forgot MPIN?
          </a>

          <div className="bsp-regulatory-text">
            GCash is regulated by the Bangko Sentral ng Pilipinas.<br />
            Protected by DoubleSafe & Customer Protect.
          </div>
        </div>
      </div>
    </div>
  );
}
