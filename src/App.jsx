import React, { useState } from 'react';
import LoginMpinScreen from './components/LoginMpinScreen';
import LoginMobileScreen from './components/LoginMobileScreen';
import LoadingScreen from './components/LoadingScreen';
import HomeScreen from './components/HomeScreen';
import { Smartphone, Monitor, KeyRound, PhoneCall, LayoutDashboard } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState('login-mpin'); // 'login-mpin' | 'login-mobile' | 'loading' | 'homescreen'
  const [isPhoneFrame, setIsPhoneFrame] = useState(true);

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '16px' }}>
      
      {/* Top Preview Switcher Bar */}
      <nav className="preview-controls-bar" aria-label="Screen Switcher">
        <button
          type="button"
          id="btn-nav-login-mpin"
          className={`preview-tab-btn ${activeScreen === 'login-mpin' ? 'active' : ''}`}
          onClick={() => setActiveScreen('login-mpin')}
        >
          <KeyRound size={14} />
          <span>Login (MPIN)</span>
        </button>

        <button
          type="button"
          id="btn-nav-login-mobile"
          className={`preview-tab-btn ${activeScreen === 'login-mobile' ? 'active' : ''}`}
          onClick={() => setActiveScreen('login-mobile')}
        >
          <PhoneCall size={14} />
          <span>Login (Mobile)</span>
        </button>

        <button
          type="button"
          id="btn-nav-homescreen"
          className={`preview-tab-btn ${activeScreen === 'homescreen' || activeScreen === 'loading' ? 'active' : ''}`}
          onClick={() => setActiveScreen('homescreen')}
        >
          <LayoutDashboard size={14} />
          <span>Homescreen</span>
        </button>

        <button
          type="button"
          className="device-toggle-btn"
          id="btn-toggle-device-frame"
          onClick={() => setIsPhoneFrame(!isPhoneFrame)}
          title="Toggle Mobile Mockup Frame"
        >
          {isPhoneFrame ? (
            <>
              <Monitor size={14} />
              <span>Full View</span>
            </>
          ) : (
            <>
              <Smartphone size={14} />
              <span>Phone Frame</span>
            </>
          )}
        </button>
      </nav>

      {/* Screen Display Container */}
      <div className="screen-wrapper">
        <div className={isPhoneFrame ? 'phone-mockup-frame' : 'full-screen-card'}>
          {isPhoneFrame && (
            <div className="phone-island">
              <div className="phone-camera" />
            </div>
          )}

          {activeScreen === 'login-mpin' && (
            <LoginMpinScreen 
              onNavigateMobileLogin={() => setActiveScreen('login-mobile')}
              onLoginSuccess={() => setActiveScreen('loading')}
            />
          )}

          {activeScreen === 'login-mobile' && (
            <LoginMobileScreen 
              onNavigateMpinLogin={() => setActiveScreen('login-mpin')}
            />
          )}

          {activeScreen === 'loading' && (
            <LoadingScreen 
              onComplete={() => setActiveScreen('homescreen')}
            />
          )}

          {activeScreen === 'homescreen' && (
            <HomeScreen 
              onLogout={() => setActiveScreen('login-mpin')}
            />
          )}
        </div>
      </div>
    </div>
  );
}
