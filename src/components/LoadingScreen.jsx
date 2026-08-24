import React, { useEffect, useState } from 'react';
import gcashMainLogo from '../assets/gcash-main.png';

export default function LoadingScreen({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Start smooth fade out at 2.6 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2600);

    // Complete transition and smoothly navigate to homepage at 3.0 seconds
    const completeTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`gcash-loading-splash ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loading-splash-content">
        <img 
          src={gcashMainLogo} 
          alt="GCash" 
          className="loading-splash-logo" 
        />
      </div>
    </div>
  );
}
