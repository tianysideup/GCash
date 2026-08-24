import React, { useState } from 'react';
import { 
  Wifi, 
  Battery, 
  Signal, 
  Eye, 
  EyeOff, 
  Send, 
  Smartphone, 
  Building2, 
  Receipt, 
  PiggyBank, 
  LineChart, 
  ShoppingBag, 
  CreditCard, 
  ShieldCheck, 
  Coins, 
  Layers, 
  QrCode, 
  Bell, 
  LogOut,
  Home, 
  Globe, 
  HeartPulse, 
  MessageCircle, 
  ChevronRight, 
  Sparkles,
  Plane,
  PlusCircle,
  BarChart3,
  CheckCircle2,
  ArrowLeftRight,
  Store,
  Wallet,
  Plus,
  Minus,
  FileText,
  Upload,
  BadgeCheck,
  CircleDollarSign,
  Handshake,
  BadgeInfo,
  ReceiptText,
  ArrowLeft,
  TrendingUp,
  Users,
  Truck,
  Bot,
  Paperclip,
  Mic,
  ChevronDown,
  ChevronUp,
  Zap,
  RefreshCw,
  Mail,
  User,
  Lock,
  Unlock,
  Download,
  Share2,
  Settings,
  HelpCircle,
  Check,
  Copy,
  Camera
} from 'lucide-react';
import gcashMainLogo from '../assets/gcash-main.png';
import gcashPassportLogo from '../assets/gcash-passport.png';
import gcashLogo from '../assets/gcash-logo.png';
import idPhoto from '../assets/id.png';

/* Authentic GCash 8-Service SVG Icons */
function GcashSendIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <rect x="6" y="8" width="26" height="18" rx="3.5" stroke="#005CEE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="#F0F7FF" />
      <rect x="12" y="15" width="26" height="18" rx="3.5" stroke="#005CEE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="#FFFFFF" />
      <text x="25" y="28.5" fontFamily="'Inter', 'Segoe UI', sans-serif" fontSize="12" fontWeight="800" fill="#005CEE" textAnchor="middle">₱</text>
      <path d="M10 9L3 13.5L10 18V9Z" fill="#005CEE" />
      <path d="M34 27L41 31.5L34 36V27Z" fill="#005CEE" />
    </svg>
  );
}

function GcashLoadIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <rect x="13" y="5" width="18" height="34" rx="4.5" stroke="#005CEE" strokeWidth="2.2" fill="#FFFFFF" />
      <line x1="19" y1="8" x2="25" y2="8" stroke="#005CEE" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="35" x2="24" y2="35" stroke="#005CEE" strokeWidth="2" strokeLinecap="round" />
      <text x="20" y="24" fontFamily="'Inter', 'Segoe UI', sans-serif" fontSize="13" fontWeight="800" fill="#005CEE" textAnchor="middle">₱</text>
      <path d="M39 20H29M29 20L33 16.5M29 20L33 23.5" stroke="#005CEE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GcashTransferIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <path d="M6 15L22 5L38 15H6Z" stroke="#005CEE" strokeWidth="2.2" strokeLinejoin="round" fill="#F0F7FF" />
      <rect x="5" y="15" width="34" height="2.8" rx="1.4" fill="#005CEE" />
      <rect x="9" y="19.5" width="3.5" height="14" rx="1" fill="#005CEE" />
      <rect x="16.5" y="19.5" width="3.5" height="14" rx="1" fill="#005CEE" />
      <rect x="24" y="19.5" width="3.5" height="14" rx="1" fill="#005CEE" />
      <rect x="31.5" y="19.5" width="3.5" height="14" rx="1" fill="#005CEE" />
      <rect x="5" y="35" width="34" height="4" rx="1.5" stroke="#005CEE" strokeWidth="1.8" fill="#F0F7FF" />
    </svg>
  );
}

function GcashBillsIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <path d="M11 7C11 5.89543 11.8954 5 13 5H31C32.1046 5 33 5.89543 33 7V36L29.5 33.5L26 36L22 33.5L18 36L14.5 33.5L11 36V7Z" stroke="#005CEE" strokeWidth="2.2" strokeLinejoin="round" fill="#FFFFFF" />
      <circle cx="12.5" cy="13" r="6.5" fill="#005CEE" stroke="#FFFFFF" strokeWidth="1.8" />
      <path d="M10 13L11.8 14.8L15.5 11" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <text x="26.5" y="17" fontFamily="'Inter', 'Segoe UI', sans-serif" fontSize="10.5" fontWeight="800" fill="#005CEE" textAnchor="middle">₱</text>
      <line x1="16.5" y1="22.5" x2="27.5" y2="22.5" stroke="#93C5FD" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="16.5" y1="27" x2="24" y2="27" stroke="#93C5FD" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function GcashBorrowIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <rect x="7" y="9" width="24" height="16" rx="2.5" stroke="#005CEE" strokeWidth="2.2" fill="#FFFFFF" />
      <path d="M15 25V28H23V25" stroke="#005CEE" strokeWidth="1.8" strokeLinecap="round" />
      <text x="16" y="20" fontFamily="'Inter', 'Segoe UI', sans-serif" fontSize="11" fontWeight="800" fill="#005CEE" textAnchor="middle">₱</text>
      <line x1="23" y1="13" x2="28" y2="13" stroke="#005CEE" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="23" y1="16.5" x2="26" y2="16.5" stroke="#005CEE" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="31.5" cy="25.5" r="5.5" stroke="#005CEE" strokeWidth="1.8" fill="#F0F7FF" />
      <path d="M31.5 22.8V25.5L33.5 26.5" stroke="#005CEE" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 35C7 32 11 31.5 15 31.5L24 31.5C26 31.5 29.5 34.5 35 34.5H40" stroke="#005CEE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GcashGSaveIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <path d="M35 22.5C35 16.5 30.5 12 23 12C15 12 10 16.5 10 23.5C10 29.5 14.5 33 22 33C25 33 27.8 32.2 30.5 30.2L33.5 32V28.2C34.5 26.5 35 24.5 35 22.5Z" stroke="#005CEE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="#FFFFFF" />
      <path d="M35 20.5C36.5 20.5 38 21.5 38 23C38 24.5 36.5 25.5 35 25.5" stroke="#005CEE" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="29.5" cy="18.5" r="1.6" fill="#005CEE" />
      <path d="M26.5 12L25.5 7.5L20 12" stroke="#005CEE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="#F0F7FF" />
      <path d="M15.5 33V36.5M26.5 33V36.5" stroke="#005CEE" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M10 24.5C7.5 24.5 7.5 21 9 20" stroke="#005CEE" strokeWidth="2" strokeLinecap="round" />
      <circle cx="19.5" cy="10" r="7" fill="#005CEE" stroke="#FFFFFF" strokeWidth="1.6" />
      <text x="19.5" y="13.8" fontFamily="'Inter', 'Segoe UI', sans-serif" fontSize="9" fontWeight="900" fill="#FFFFFF" textAnchor="middle">₱</text>
    </svg>
  );
}

function GcashGInsureIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <path d="M21 6.5L9 11.2V22.5C9 30.8 14.5 36.5 21 39.2C27.5 36.5 33 30.8 33 22.5V11.2L21 6.5Z" stroke="#005CEE" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="#FFFFFF" />
      <circle cx="21" cy="18.5" r="4.2" fill="#93C5FD" />
      <path d="M13.5 29C13.5 25.2 16.8 23.2 21 23.2C25.2 23.2 28.5 25.2 28.5 29" fill="#93C5FD" />
      <circle cx="31" cy="11" r="5" fill="#FFFFFF" stroke="#005CEE" strokeWidth="1.8" />
      <path d="M31 8.8V13.2M28.8 11H33.2" stroke="#005CEE" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function GcashGPassportIcon({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="16" stroke="#005CEE" strokeWidth="2.2" fill="#FFFFFF" />
      <line x1="6.5" y1="22" x2="37.5" y2="22" stroke="#005CEE" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 14.5C13 17 17.5 18 22 18C26.5 18 31 17 35 14.5" stroke="#005CEE" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 29.5C13 27 17.5 26 22 26C26.5 26 31 27 35 29.5" stroke="#005CEE" strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="22" cy="22" rx="7.5" ry="16" stroke="#005CEE" strokeWidth="2" fill="#F0F7FF" />
      <line x1="22" y1="6" x2="22" y2="38" stroke="#005CEE" strokeWidth="1.8" />
    </svg>
  );
}

export default function HomeScreen({ onLogout }) {
  const [tabHistory, setTabHistory] = useState(['home']);
  const activeTab = tabHistory[tabHistory.length - 1] || 'home';

  const navigateTo = (newTab) => {
    setTabHistory(prev => {
      if (prev[prev.length - 1] === newTab) return prev;
      return [...prev, newTab];
    });
  };

  const navigateBack = () => {
    setTabHistory(prev => {
      if (prev.length <= 1) {
        return ['home'];
      }
      return prev.slice(0, -1);
    });
  };

  const resetToTab = (newTab) => {
    setTabHistory([newTab]);
  };

  const [walletHeaderTab, setWalletHeaderTab] = useState('wallet'); // 'wallet' | 'savings'
  const [showBalance, setShowBalance] = useState(true);
  const [showSuccessToast, setShowSuccessToast] = useState('');
  const [historyFilter, setHistoryFilter] = useState('all');
  const [chatInput, setChatInput] = useState('');
  const [thinkingExpanded, setThinkingExpanded] = useState(true);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 'ai-1',
      sender: 'ai',
      text: "Kumusta Carla! I'm Gigi, your GCash Negosyo Agentic Copilot. I continuously monitor your sales, loan eligibility, and suppliers to help expand your seafood business.",
      timestamp: '9:38 AM'
    },
    {
      id: 'user-1',
      sender: 'user',
      text: "Can you analyze my cash flow today and check if I'm qualified for a loan credit increase?",
      timestamp: '9:40 AM'
    },
    {
      id: 'ai-2',
      sender: 'ai',
      text: "Great news! Based on your consistent daily turnover (₱6,300 today) and 100% on-time supplier settlements, you are pre-qualified for an instant credit upgrade from ₱20,000 to ₱35,000.",
      hasThought: true,
      thoughtSteps: [
        "Queried transaction ledger (₱6,300 gross sales, ₱4,000 expense)",
        "Calculated Negosyo Health score: Strong (12% MoM growth)",
        "Checked credit line: ₱15,831.00 / ₱20,000 (79% utilization)",
        "Pre-approved credit boost ceiling: ₱35,000.00"
      ],
      hasAction: true,
      actionTitle: "Pre-Approved Credit Boost",
      actionDesc: "Increase your available loan line to ₱35,000 with 0 processing fee.",
      actionBtn: "Activate ₱35,000 Credit Line",
      timestamp: '9:41 AM'
    }
  ]);

  const handleSendChat = (e) => {
    if (e) e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: chatInput,
      timestamp: 'Just now'
    };
    setChatMessages(prev => [...prev, userMsg]);
    const currentInput = chatInput;
    setChatInput('');

    setTimeout(() => {
      const aiReply = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `I've analyzed "${currentInput}". Your Negosyo Passport has been updated and the action has been scheduled automatically.`,
        hasThought: true,
        thoughtSteps: [
          "Parsed merchant prompt via Agentic Planner",
          "Synchronized ledger with GCash Business backend",
          "Generated verified compliance receipt"
        ],
        timestamp: 'Just now'
      };
      setChatMessages(prev => [...prev, aiReply]);
      triggerToast('Gigi AI Copilot executed action');
    }, 800);
  };

  // Negosyo Activity Entries state
  const [autoRecorded, setAutoRecorded] = useState([
    {
      id: 'a1',
      title: 'GCash Sales',
      amount: 2700,
      iconType: 'wallet',
      iconBg: '#E0F2FE',
      iconColor: '#0284C7',
      isVerified: true
    },
    {
      id: 'a2',
      title: 'Supplier Payment',
      subtitle: 'to ABC Fish Concessionaire',
      amount: -4000,
      iconType: 'store',
      iconBg: '#FFE4E6',
      iconColor: '#E11D48',
      isVerified: true
    }
  ]);

  const [inboxFilter, setInboxFilter] = useState('all');
  const [qrMode, setQrMode] = useState('scan');
  const [cardLocked, setCardLocked] = useState(false);
  const [showCardDetails, setShowCardDetails] = useState(false);

  const [manualEntries, setManualEntries] = useState([
    {
      id: 'm1',
      title: 'Cash Sales',
      amount: 3600,
      iconType: 'wallet',
      iconBg: '#F1F5F9',
      iconColor: '#334155',
      isDeclared: true
    }
  ]);

  const handleAddCashSale = () => {
    const newEntry = {
      id: `m-${Date.now()}`,
      title: 'Cash Sales',
      amount: 1500,
      iconType: 'wallet',
      iconBg: '#F1F5F9',
      iconColor: '#334155',
      isDeclared: true
    };
    setManualEntries(prev => [newEntry, ...prev]);
    triggerToast('Added ₱1,500.00 Cash Sale');
  };

  const handleAddExpense = () => {
    const newEntry = {
      id: `m-${Date.now()}`,
      title: 'Utility Expense',
      subtitle: 'Store Electricity Bill',
      amount: -850,
      iconType: 'store',
      iconBg: '#FFE4E6',
      iconColor: '#E11D48',
      isDeclared: true
    };
    setManualEntries(prev => [newEntry, ...prev]);
    triggerToast('Added ₱850.00 Expense');
  };

  const handleUploadReceipt = () => {
    triggerToast('Receipt scanned & automatically recorded!');
  };

  const triggerToast = (msg) => {
    setShowSuccessToast(msg);
    setTimeout(() => setShowSuccessToast(''), 3000);
  };

  const rawBalance = 435.00;
  const formattedBalance = `₱${rawBalance.toLocaleString('en-PH', { minimumFractionDigits: 2 })}`;


  return (
    <div className="gcash-home-container">
      
      {/* Toast Notification */}
      {showSuccessToast && (
        <div style={{
          position: 'absolute',
          top: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#0F172A',
          color: '#FFFFFF',
          padding: '8px 16px',
          borderRadius: '999px',
          fontSize: '12px',
          fontWeight: 700,
          zIndex: 100,
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <CheckCircle2 size={14} color="#10B981" />
          <span>{showSuccessToast}</span>
        </div>
      )}

      {/* Scrollable Content Body */}
      <div className="home-scroll-body">
        
        {/* Status Bar on Top */}
        <div className="mobile-status-bar" style={{ background: 'transparent', color: '#0F172A' }}>
          <span>9:41</span>
          <div className="status-icons" style={{ color: '#0F172A' }}>
            <Signal size={14} />
            <Wifi size={14} />
            <Battery size={14} />
          </div>
        </div>

        {/* Tab 1: HOME Content */}
        {activeTab === 'home' && (
          <div>
            {/* Top Header Background (Flat Light) */}
            <div className="home-header-flat">
              {/* User Row / Header Left */}
              <div className="home-user-row">
                <div className="home-user-profile">
                  <img src={gcashMainLogo} alt="GCash" className="home-passport-logo" />
                </div>

                <div className="home-header-actions">
                  <button type="button" className="home-icon-btn" title="Log Out" onClick={onLogout}>
                    <LogOut size={16} />
                  </button>
                </div>
              </div>

              {/* Authentic GCash Wallet & Savings Tabbed Card */}
              <div className="gcash-wallet-header-container">
                <div className="gcash-wallet-tabs-row">
                  <button 
                    type="button" 
                    className={`wallet-tab-btn wallet-tab ${walletHeaderTab === 'wallet' ? 'active' : ''}`}
                    onClick={() => setWalletHeaderTab('wallet')}
                  >
                    Wallet
                  </button>
                  <button 
                    type="button" 
                    className={`wallet-tab-btn savings-tab ${walletHeaderTab === 'savings' ? 'active' : ''}`}
                    onClick={() => setWalletHeaderTab('savings')}
                  >
                    Savings
                  </button>
                </div>

                <div className={`gcash-wallet-card-body ${walletHeaderTab === 'savings' ? 'savings-active' : ''}`}>
                  <div className="wallet-balance-col">
                    <div className="wallet-balance-label-row">
                      <span className="wallet-balance-label">
                        {walletHeaderTab === 'wallet' ? 'AVAILABLE BALANCE' : 'GSave BALANCE'}
                      </span>
                      <button 
                        type="button" 
                        className="wallet-eye-toggle"
                        onClick={() => setShowBalance(!showBalance)}
                        title={showBalance ? "Hide balance" : "Show balance"}
                      >
                        {showBalance ? <Eye size={14} /> : <EyeOff size={14} />}
                      </button>
                    </div>

                    <div className="wallet-balance-amount">
                      {showBalance ? (
                        <>
                          <span className="wallet-peso-sign">₱</span>
                          <span>{walletHeaderTab === 'wallet' ? '435.00' : '12,500.00'}</span>
                        </>
                      ) : (
                        <span className="wallet-masked-dots">₱ ••••••</span>
                      )}
                    </div>
                  </div>

                  <div className="wallet-card-right">
                    <button 
                      type="button" 
                      className="btn-cash-in-pill"
                      onClick={() => triggerToast(walletHeaderTab === 'wallet' ? 'Cash In: 7-Eleven, BPI, UnionBank & touchpay ready' : 'GSave: Deposit funds to CIMB Bank')}
                    >
                      {walletHeaderTab === 'wallet' ? '+ Cash In' : '+ Deposit'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Authentic GCash 8-Services Flat Grid (Layed flat on background) */}
              <div className="home-services-flat-grid">
                
                {/* 1. Send */}
                <button 
                  type="button" 
                  className="home-service-item"
                  onClick={() => triggerToast('Send Money: Express Send & QR Payment ready')}
                >
                  <div className="home-service-icon-wrap">
                    <GcashSendIcon size={38} />
                  </div>
                  <span className="home-service-label">Send</span>
                </button>

                {/* 2. Load */}
                <button 
                  type="button" 
                  className="home-service-item"
                  onClick={() => triggerToast('Buy Load: Telco, Data & Roaming promos')}
                >
                  <div className="home-service-icon-wrap">
                    <GcashLoadIcon size={38} />
                  </div>
                  <span className="home-service-label">Load</span>
                </button>

                {/* 3. Transfer */}
                <button 
                  type="button" 
                  className="home-service-item"
                  onClick={() => triggerToast('Bank Transfer: Instapay & 40+ Partner Banks')}
                >
                  <div className="home-service-icon-wrap">
                    <GcashTransferIcon size={38} />
                  </div>
                  <span className="home-service-label">Transfer</span>
                </button>

                {/* 4. Bills */}
                <button 
                  type="button" 
                  className="home-service-item"
                  onClick={() => triggerToast('Pay Bills: Over 600+ Biller Partners')}
                >
                  <div className="home-service-icon-wrap">
                    <GcashBillsIcon size={38} />
                  </div>
                  <span className="home-service-label">Bills</span>
                </button>

                {/* 5. Borrow */}
                <button 
                  type="button" 
                  className="home-service-item"
                  onClick={() => triggerToast('Borrow: Available Loan Credit ₱15,831.00')}
                >
                  <div className="home-service-icon-wrap">
                    <GcashBorrowIcon size={38} />
                  </div>
                  <span className="home-service-label">Borrow</span>
                </button>

                {/* 6. GSave */}
                <button 
                  type="button" 
                  className="home-service-item"
                  onClick={() => triggerToast('GSave: Up to 6.5% p.a. high-yield savings')}
                >
                  <div className="home-service-icon-wrap">
                    <GcashGSaveIcon size={38} />
                  </div>
                  <span className="home-service-label">GSave</span>
                </button>

                {/* 7. GInsure */}
                <button 
                  type="button" 
                  className="home-service-item"
                  onClick={() => triggerToast('GInsure: Business & Health Coverage from ₱39/mo')}
                >
                  <div className="home-service-icon-wrap">
                    <GcashGInsureIcon size={38} />
                  </div>
                  <span className="home-service-label">GInsure</span>
                </button>

                {/* 8. GPassport */}
                <button 
                  type="button" 
                  className="home-service-item"
                  onClick={() => {
                    navigateTo('gchat');
                    triggerToast('Opening Gigi AI Copilot & Business Assistant...');
                  }}
                >
                  <div className="home-service-icon-wrap">
                    <GcashGPassportIcon size={38} />
                  </div>
                  <span className="home-service-label">GPassport</span>
                </button>

              </div>
            </div>

            {/* Dashboard Sections Body */}
            <div className="home-dashboard-content">

              {/* 1. Negosyo Passport Summary Card */}
              <div>
                <div className="home-section-title-row">
                  <span className="home-section-title-text">Negosyo Passport</span>
                  <button 
                    type="button" 
                    className="home-section-action-link"
                    onClick={() => navigateTo('passport')}
                  >
                    <span>View Passport</span>
                    <ChevronRight size={14} />
                  </button>
                </div>

                <div 
                  className="home-passport-card"
                  onClick={() => navigateTo('passport')}
                >
                  <div className="home-passport-header">
                    <div className="home-passport-biz-info">
                      <img src={idPhoto} alt="Carla Reyes" className="home-passport-avatar" />
                      <div className="home-passport-name-group">
                        <span className="home-passport-name">Carla’s Fresh Seafood</span>
                        <span className="home-passport-category">Level 2 Verified • Retail SME</span>
                      </div>
                    </div>
                    <BadgeCheck size={22} color="var(--gcash-blue)" />
                  </div>

                  <div className="home-passport-meter-row">
                    <div className="home-meter-info">
                      <span className="home-meter-label">Passport Strength</span>
                      <span className="home-meter-value">58% • Strong Profile</span>
                    </div>
                    <div className="home-meter-track">
                      <div className="home-meter-fill" style={{ width: '58%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Monthly Business Health Quick Snapshot */}
              <div>
                <div className="home-section-title-row">
                  <span className="home-section-title-text">Business Health</span>
                  <button 
                    type="button" 
                    className="home-section-action-link"
                    onClick={() => navigateTo('health')}
                  >
                    <span>Analytics</span>
                    <ChevronRight size={14} />
                  </button>
                </div>

                <div className="home-metric-snapshot-grid">
                  <div 
                    className="home-metric-card"
                    onClick={() => navigateTo('health')}
                  >
                    <div className="home-metric-card-top">
                      <span>Monthly Sales</span>
                      <TrendingUp size={16} color="#FFFFFF" />
                    </div>
                    <div className="home-metric-amount">
                      <span className="peso-symbol">₱</span>68,400
                    </div>
                    <div className="home-metric-footer">
                      <span className="home-metric-pill-blue">↑ +12% MoM</span>
                    </div>
                  </div>

                  <div 
                    className="home-metric-card"
                    onClick={() => navigateTo('health')}
                  >
                    <div className="home-metric-card-top">
                      <span>Expenses</span>
                      <Receipt size={16} color="#FFFFFF" />
                    </div>
                    <div className="home-metric-amount">
                      <span className="peso-symbol">₱</span>39,200
                    </div>
                    <div className="home-metric-footer">
                      <span className="home-metric-pill-slate">57% of sales</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Today's Cash Flow Preview */}
              <div>
                <div className="home-section-title-row">
                  <span className="home-section-title-text">Today's Cash Flow</span>
                  <button 
                    type="button" 
                    className="home-section-action-link"
                    onClick={() => navigateTo('history')}
                  >
                    <span>Full History</span>
                    <ChevronRight size={14} />
                  </button>
                </div>

                <div 
                  className="history-kpi-card"
                  style={{ margin: 0, cursor: 'pointer' }}
                  onClick={() => navigateTo('history')}
                >
                  <div className="kpi-col">
                    <span className="kpi-label">Inflow</span>
                    <span className="kpi-value inflow-val">+<span className="peso-symbol">₱</span>6,300</span>
                    <span className="kpi-subtext">2 entries</span>
                  </div>
                  <div className="kpi-col">
                    <span className="kpi-label">Outflow</span>
                    <span className="kpi-value outflow-val">-<span className="peso-symbol">₱</span>4,000</span>
                    <span className="kpi-subtext">1 supplier</span>
                  </div>
                  <div className="kpi-col">
                    <span className="kpi-label">Net Flow</span>
                    <span className="kpi-value net-val">+<span className="peso-symbol">₱</span>2,300</span>
                    <span className="kpi-subtext" style={{ color: 'var(--gcash-blue)' }}>Verified</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 2: HISTORY / TODAY'S NEGOSYO Content */}
        {(activeTab === 'activity' || activeTab === 'history') && (
          <div className="activity-screen-container">
            
            {/* Top Back Navigation Bar */}
            <div className="passport-top-bar">
              <button 
                type="button" 
                className="passport-back-btn" 
                onClick={navigateBack}
                title="Go Back"
              >
                <ArrowLeft size={19} />
                <img src={gcashPassportLogo} alt="GCash Passport" className="top-bar-gcash-passport-logo" />
              </button>
            </div>

            {/* Header Title */}
            <div className="history-header-box">
              <h1 className="activity-header-title">Today's Negosyo</h1>
              <p className="history-header-sub">Real-time sales, payments, and verified cash flow.</p>
            </div>

            {/* Summary KPI Card */}
            <div className="history-kpi-card">
              <div className="kpi-col">
                <span className="kpi-label">Inflow</span>
                <span className="kpi-value income">+<span className="peso-symbol">₱</span>6,300</span>
              </div>
              <div className="kpi-col">
                <span className="kpi-label">Outflow</span>
                <span className="kpi-value expense">-<span className="peso-symbol">₱</span>4,000</span>
              </div>
              <div className="kpi-col">
                <span className="kpi-label">Net Flow</span>
                <span className="kpi-value net">+<span className="peso-symbol">₱</span>2,300</span>
              </div>
            </div>

            {/* Filter Chips */}
            <div className="history-filter-chips">
              <button 
                type="button" 
                className={`history-chip ${historyFilter === 'all' ? 'active' : ''}`}
                onClick={() => setHistoryFilter('all')}
              >
                All (3)
              </button>
              <button 
                type="button" 
                className={`history-chip ${historyFilter === 'sales' ? 'active' : ''}`}
                onClick={() => setHistoryFilter('sales')}
              >
                Sales & Income (2)
              </button>
              <button 
                type="button" 
                className={`history-chip ${historyFilter === 'expenses' ? 'active' : ''}`}
                onClick={() => setHistoryFilter('expenses')}
              >
                Expenses (1)
              </button>
            </div>

            {/* Section 1: Automatically Recorded */}
            {(historyFilter === 'all' || historyFilter === 'sales' || historyFilter === 'expenses') && (
              <div>
                <h2 className="activity-section-title">
                  <span>Automatically Recorded</span>
                  <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>GCash Linked</span>
                </h2>
                
                {autoRecorded
                  .filter(item => {
                    if (historyFilter === 'sales') return item.amount > 0;
                    if (historyFilter === 'expenses') return item.amount < 0;
                    return true;
                  })
                  .map((item) => (
                    <div 
                      key={item.id} 
                      className="negosyo-card"
                      onClick={() => triggerToast(`${item.title}: ₱${Math.abs(item.amount).toLocaleString()} (Verified)`)}
                    >
                      <div className="negosyo-card-main">
                        <div className="negosyo-left-info">
                          <div className="negosyo-icon-box" style={{ background: item.iconBg, color: item.iconColor }}>
                            {item.iconType === 'store' ? <Store size={20} /> : <Wallet size={20} />}
                          </div>
                          <div>
                            <div className="negosyo-title-text">{item.title}</div>
                            {item.subtitle && <div className="negosyo-subtext">{item.subtitle}</div>}
                          </div>
                        </div>

                        <div className={`negosyo-amount-text ${item.amount < 0 ? 'negative' : ''}`}>
                          {item.amount < 0 ? (
                            <>- <span className="peso-symbol">₱</span>{Math.abs(item.amount).toLocaleString()}</>
                          ) : (
                            <><span className="peso-symbol">₱</span>{item.amount.toLocaleString()}</>
                          )}
                        </div>
                      </div>

                      {item.isVerified && (
                        <div className="badge-verified">
                          <CheckCircle2 size={11} />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}

            {/* Section 2: Manual Entry */}
            {(historyFilter === 'all' || historyFilter === 'sales' || historyFilter === 'expenses') && (
              <div>
                <h2 className="activity-section-title">
                  <span>Manual Entry</span>
                  <span style={{ fontSize: '11px', color: '#64748B', fontWeight: 600 }}>Cash Log</span>
                </h2>
                
                {manualEntries
                  .filter(item => {
                    if (historyFilter === 'sales') return item.amount > 0;
                    if (historyFilter === 'expenses') return item.amount < 0;
                    return true;
                  })
                  .map((item) => (
                    <div 
                      key={item.id} 
                      className="negosyo-card"
                      onClick={() => triggerToast(`${item.title}: ₱${Math.abs(item.amount).toLocaleString()} (Declared)`)}
                    >
                      <div className="negosyo-card-main">
                        <div className="negosyo-left-info">
                          <div className="negosyo-icon-box" style={{ background: item.iconBg, color: item.iconColor }}>
                            {item.iconType === 'store' ? <Store size={20} /> : <Wallet size={20} />}
                          </div>
                          <div>
                            <div className="negosyo-title-text">{item.title}</div>
                            {item.subtitle && <div className="negosyo-subtext">{item.subtitle}</div>}
                          </div>
                        </div>

                        <div className={`negosyo-amount-text ${item.amount < 0 ? 'negative' : ''}`}>
                          {item.amount < 0 ? (
                            <>- <span className="peso-symbol">₱</span>{Math.abs(item.amount).toLocaleString()}</>
                          ) : (
                            <><span className="peso-symbol">₱</span>{item.amount.toLocaleString()}</>
                          )}
                        </div>
                      </div>

                      {item.isDeclared && (
                        <div className="badge-declared">
                          <ArrowLeftRight size={10} />
                          <span>Declared</span>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="activity-actions-row">
              <button 
                type="button" 
                className="btn-negosyo-sale"
                onClick={handleAddCashSale}
              >
                <Plus size={16} />
                <span>Cash Sale</span>
              </button>

              <button 
                type="button" 
                className="btn-negosyo-expense"
                onClick={handleAddExpense}
              >
                <Minus size={16} />
                <span>Expense</span>
              </button>
            </div>

            <button 
              type="button" 
              className="btn-negosyo-upload"
              onClick={handleUploadReceipt}
            >
              <FileText size={16} />
              <span>Upload Receipt</span>
            </button>
          </div>
        )}

        {/* Tab 3: PASSPORT Content */}
        {activeTab === 'passport' && (
          <div className="passport-screen-container">
            
            {/* Top Back Navigation Bar */}
            <div className="passport-top-bar">
              <button 
                type="button" 
                className="passport-back-btn" 
                onClick={navigateBack}
                title="Go Back"
              >
                <ArrowLeft size={19} />
                <img src={gcashPassportLogo} alt="GCash Passport" className="top-bar-gcash-passport-logo" />
              </button>
            </div>

            {/* Business Title */}
            <div className="passport-title-box">
              <h1 className="passport-business-title">
                Carla’s Fresh Seafood<br />Negosyo Passport
              </h1>
            </div>

            {/* Valid Business Passport Card (Two-Column Real ID Layout) */}
            <div className="passport-valid-id-card">
              {/* Top Security Row */}
              <div className="passport-card-top">
                <div className="passport-card-badge">
                  <CreditCard size={14} />
                  <span>Negosyo Passport ID</span>
                </div>
                <div className="passport-tier-pill">
                  <ShieldCheck size={12} />
                  <span>Level 2 Verified</span>
                </div>
              </div>

              {/* 2-Column ID Body: Left Info / Right Donut Progress */}
              <div className="passport-id-body-grid">
                
                {/* Column 1: Owner & Enterprise Info */}
                <div className="passport-id-left-col">
                  <div className="passport-avatar-box photo-id-wrap">
                    <img src={idPhoto} alt="Carla Reyes" className="passport-owner-photo" />
                  </div>
                  <div className="passport-owner-details">
                    <div className="passport-owner-name">Carla Reyes</div>
                    <div className="passport-biz-name">Carla’s Fresh Seafood</div>
                    <div className="passport-biz-cat">Retail SME • Food Distribution</div>
                    <div className="passport-id-code">ID: GNP-2026-8891</div>
                  </div>
                </div>

                {/* Column 2: Donut Progress Meter */}
                <div className="passport-id-right-col">
                  <div className="gauge-svg-wrap-compact">
                    <svg width="76" height="76" viewBox="0 0 76 76">
                      <circle
                        cx="38"
                        cy="38"
                        r="30"
                        fill="none"
                        stroke="#E2E8F0"
                        strokeWidth="7"
                      />
                      <circle
                        cx="38"
                        cy="38"
                        r="30"
                        fill="none"
                        stroke="var(--gcash-blue)"
                        strokeWidth="7"
                        strokeDasharray="188.49"
                        strokeDashoffset={188.49 * (1 - 0.58)}
                        strokeLinecap="round"
                        transform="rotate(-90 38 38)"
                      />
                    </svg>
                    <div className="gauge-center-text-compact">58%</div>
                  </div>
                  <span className="gauge-label-compact">Passport Strength</span>
                </div>

              </div>

              {/* Validity Footer */}
              <div className="passport-card-footer">
                <span>Issued: Mar 2023</span>
                <span className="passport-valid-badge">
                  <CheckCircle2 size={11} />
                  <span>Active Valid</span>
                </span>
                <span>BSP Regulated</span>
              </div>
            </div>

            {/* Category Cards List */}
            <div className="passport-items-list">
              
              {/* 1. Business Identity */}
              <div 
                className="passport-category-card"
                onClick={() => triggerToast('Business Identity is 100% Verified')}
              >
                <div className="passport-category-header">
                  <div className="passport-cat-left">
                    <div className="passport-cat-icon" style={{ background: '#ECFDF5', color: '#059669' }}>
                      <CheckCircle2 size={20} />
                    </div>
                    <div className="passport-cat-texts">
                      <span className="passport-cat-name">Business Identity</span>
                      <span className="passport-cat-status">Verified</span>
                    </div>
                  </div>
                  <ChevronRight size={18} color="#94A3B8" />
                </div>
              </div>

              {/* 2. Business Activity */}
              <div 
                className="passport-category-card"
                onClick={() => triggerToast('Business Activity score: Strong')}
              >
                <div className="passport-category-header">
                  <div className="passport-cat-left">
                    <div className="passport-cat-icon" style={{ background: '#ECFDF5', color: '#059669' }}>
                      <TrendingUp size={20} />
                    </div>
                    <div className="passport-cat-texts">
                      <span className="passport-cat-name">Business Activity</span>
                      <span className="passport-cat-status">Strong</span>
                    </div>
                  </div>
                  <ChevronRight size={18} color="#94A3B8" />
                </div>
              </div>

              {/* 3. Cash-Flow Confidence */}
              <div 
                className="passport-category-card"
                onClick={() => triggerToast('Cash-Flow Confidence: High')}
              >
                <div className="passport-category-header">
                  <div className="passport-cat-left">
                    <div className="passport-cat-icon" style={{ background: '#F0FDFA', color: '#0D9488' }}>
                      <Wallet size={20} />
                    </div>
                    <div className="passport-cat-texts">
                      <span className="passport-cat-name">Cash-Flow Confidence</span>
                      <span className="passport-cat-status">High</span>
                    </div>
                  </div>
                  <ChevronRight size={18} color="#94A3B8" />
                </div>
              </div>

              {/* 4. Business Network */}
              <div 
                className="passport-category-card"
                onClick={() => triggerToast('Business Network: 1 Verified Supplier')}
              >
                <div className="passport-category-header">
                  <div className="passport-cat-left">
                    <div className="passport-cat-icon" style={{ background: '#EFF6FF', color: 'var(--gcash-blue)' }}>
                      <Users size={20} />
                    </div>
                    <div className="passport-cat-texts">
                      <span className="passport-cat-name">Business Network</span>
                      <span className="passport-cat-status">1 Verified Supplier</span>
                    </div>
                  </div>
                  <ChevronRight size={18} color="#94A3B8" />
                </div>
              </div>

              {/* 5. Formalization */}
              <div 
                className="passport-category-card"
                onClick={() => triggerToast('Formalization: 3 of 5 steps completed')}
              >
                <div className="passport-category-header">
                  <div className="passport-cat-left">
                    <div className="passport-cat-icon" style={{ background: '#F1F5F9', color: '#64748B' }}>
                      <FileText size={20} />
                    </div>
                    <div className="passport-cat-texts">
                      <span className="passport-cat-name">Formalization</span>
                      <span className="passport-cat-status" style={{ color: '#64748B' }}>3 of 5 steps complete</span>
                    </div>
                  </div>
                  <ChevronRight size={18} color="#94A3B8" />
                </div>
                <div className="passport-progress-track">
                  <div className="passport-progress-fill" style={{ width: '60%' }} />
                </div>
              </div>

            </div>

            {/* Next Best Step Card */}
            <div 
              className="passport-next-step-card"
              onClick={() => {
                navigateTo('activity');
                triggerToast('Navigating to Today\'s Negosyo Activity...');
              }}
            >
              <div className="next-step-title">Next Best Step</div>
              <div className="next-step-desc">
                Record today's business activity to strengthen your profile.
              </div>
            </div>

          </div>
        )}

        {/* Tab 4: HEALTH Content (Business Health Dashboard) */}
        {activeTab === 'health' && (
          <div className="health-screen-container">
            
            {/* Top Back Navigation Bar */}
            <div className="passport-top-bar">
              <button 
                type="button" 
                className="passport-back-btn" 
                onClick={navigateBack}
                title="Go Back"
              >
                <ArrowLeft size={19} />
                <img src={gcashPassportLogo} alt="GCash Passport" className="top-bar-gcash-passport-logo" />
              </button>
            </div>

            {/* Title Section */}
            <div className="health-header-box">
              <h1 className="health-header-title">Your Negosyo This Month</h1>
              <p className="health-header-sub">Here is an overview of your business health.</p>
            </div>

            {/* Metrics Column */}
            <div className="health-metrics-col">
              
              {/* 1. Estimated Sales (Full Width) */}
              <div 
                className="health-card"
                onClick={() => triggerToast('Estimated Sales: ₱68,400 (+12% MoM)')}
                style={{ cursor: 'pointer' }}
              >
                <div className="health-card-top-row">
                  <span>Estimated Sales</span>
                  <TrendingUp size={18} color="#059669" />
                </div>
                <div className="health-card-amount">
                  <span className="peso-symbol">₱</span>68,400
                </div>
                <div className="health-growth-text">
                  <span>↑ +12% vs last month</span>
                </div>
              </div>

              {/* 2. Expenses & Digital Sales Split Row */}
              <div className="health-metrics-split">
                
                {/* Expenses */}
                <div 
                  className="health-split-card"
                  onClick={() => triggerToast('Monthly Expenses: ₱39,200')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="health-card-top-row">
                    <span>Expenses</span>
                    <Receipt size={16} color="#64748B" />
                  </div>
                  <div className="health-split-amount">
                    <span className="peso-symbol">₱</span>39,200
                  </div>
                </div>

                {/* Digital Sales */}
                <div 
                  className="health-split-card"
                  onClick={() => triggerToast('Digital Sales Ratio: 46%')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="health-card-top-row">
                    <span>Digital Sales</span>
                    <CreditCard size={16} color="#64748B" />
                  </div>
                  <div className="health-split-amount">
                    46%
                  </div>
                  <div className="passport-progress-track">
                    <div className="passport-progress-fill" style={{ width: '46%' }} />
                  </div>
                </div>

              </div>

              {/* 3. Supplier Consistency */}
              <div 
                className="health-supplier-card"
                onClick={() => triggerToast('Supplier Consistency: Strong with 100% on-time settlement')}
                style={{ cursor: 'pointer' }}
              >
                <div className="health-supplier-icon">
                  <Truck size={20} />
                </div>
                <div>
                  <div className="health-supplier-label">Supplier Consistency</div>
                  <div className="health-supplier-status">Strong</div>
                </div>
              </div>

            </div>

            {/* Actionable Insights Section */}
            <div className="health-insights-section">
              <h2 className="health-insights-title">Actionable Insights</h2>

              {/* Doing Well Card */}
              <div className="insight-card">
                <div className="insight-header doing-well">
                  <CheckCircle2 size={18} color="#0F766E" />
                  <span>Doing Well</span>
                </div>
                <div className="insight-list">
                  <div className="insight-item">
                    <span className="insight-bullet-check">✓</span>
                    <span>Consistent daily activity and log-ins.</span>
                  </div>
                  <div className="insight-item">
                    <span className="insight-bullet-check">✓</span>
                    <span>Regular incoming payments detected.</span>
                  </div>
                  <div className="insight-item">
                    <span className="insight-bullet-check">✓</span>
                    <span>Growing sales trend over the last quarter.</span>
                  </div>
                </div>
              </div>

              {/* Improve Next Card */}
              <div className="insight-card">
                <div className="insight-header improve-next">
                  <TrendingUp size={18} color="#B45309" />
                  <span>Improve Next</span>
                </div>
                <div className="insight-list">
                  <div className="insight-item">
                    <span className="insight-bullet-arrow">→</span>
                    <span>Increase digital transactions to streamline tracking.</span>
                  </div>
                  <div className="insight-item">
                    <span className="insight-bullet-arrow">→</span>
                    <span>Consider building a small cash reserve fund.</span>
                  </div>
                  <div className="insight-item">
                    <span className="insight-bullet-arrow">→</span>
                    <span>Complete advanced merchant registration for more perks.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* Tab 5: GCHAT / GIGI AGENTIC AI COPILOT Content */}
        {activeTab === 'gchat' && (
          <div className="ai-chat-container">

            {/* Top Header Row with Logo (Outside the card) */}
            <div className="gchat-top-header-row">
              <button 
                type="button" 
                className="passport-back-btn" 
                onClick={navigateBack}
                title="Go Back"
              >
                <ArrowLeft size={19} color="var(--gcash-blue)" />
                <img src={gcashPassportLogo} alt="GCash Passport" className="home-passport-logo" />
              </button>
            </div>

            {/* Header Card Above GChat: Authentic GCash Business Header Card */}
            <div className="gchat-business-header-card">
              <div className="gchat-business-card-top">
                <span className="gchat-business-card-title">GCash Business</span>
                <div className="gchat-business-tier-badge">
                  <span>Verified Tier</span>
                  <BadgeCheck size={13} />
                </div>
              </div>

              <div className="gchat-business-card-body">
                <div className="gchat-business-credit-label">Available Loan Credit</div>
                <div className="gchat-business-credit-amount">
                  <span className="current-credit">₱ 15, 831.00</span>
                  <span className="max-credit">/ ₱ 20, 000</span>
                </div>
              </div>

              {/* 2x3 Shortcut Action Pills Inside Card */}
              <div className="gchat-business-actions-row">
                {/* Row 1 */}
                <button 
                  type="button" 
                  className="gchat-business-pill-btn"
                  onClick={() => triggerToast('GPay QR ready for merchant payment')}
                >
                  <CircleDollarSign size={13} strokeWidth={2.2} />
                  <span>GPay</span>
                </button>

                <button 
                  type="button" 
                  className="gchat-business-pill-btn"
                  onClick={() => triggerToast('Merchant QR code ready to receive funds')}
                >
                  <Handshake size={13} strokeWidth={2.2} />
                  <span>GReceived</span>
                </button>

                <button 
                  type="button" 
                  className="gchat-business-pill-btn"
                  onClick={() => {
                    navigateTo('passport');
                    triggerToast('Navigating to Negosyo Passport...');
                  }}
                >
                  <Globe size={13} strokeWidth={2.2} />
                  <span>GPassport</span>
                </button>

                {/* Row 2 */}
                <button 
                  type="button" 
                  className="gchat-business-pill-btn"
                  onClick={() => {
                    navigateTo('history');
                    triggerToast('Navigating to Negosyo Activities...');
                  }}
                >
                  <ReceiptText size={13} strokeWidth={2.2} />
                  <span>GActivities</span>
                </button>

                <button 
                  type="button" 
                  className="gchat-business-pill-btn"
                  onClick={() => {
                    navigateTo('health');
                    triggerToast('Navigating to Business Health Analytics...');
                  }}
                >
                  <HeartPulse size={13} strokeWidth={2.2} />
                  <span>GHealth</span>
                </button>

                <button 
                  type="button" 
                  className="gchat-business-pill-btn"
                  onClick={() => {
                    setChatInput("What is my current GLoan limit and how do I apply for ₱35,000 credit increase?");
                    triggerToast('GLoan inquiry loaded into Gigi Copilot');
                  }}
                >
                  <CreditCard size={13} strokeWidth={2.2} />
                  <span>GLoan</span>
                </button>
              </div>
            </div>

            {/* Message Stream */}
            <div className="ai-chat-messages">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={msg.sender === 'user' ? 'chat-msg-user' : 'chat-msg-ai'}>
                  {msg.sender === 'user' ? (
                    <div>{msg.text}</div>
                  ) : (
                    <>
                      {/* Thought process card if present */}
                      {msg.hasThought && (
                        <div className="agent-thought-card">
                          <div 
                            className="thought-header"
                            onClick={() => setThinkingExpanded(!thinkingExpanded)}
                          >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                              <Zap size={13} color="#005CEE" />
                              <span>Gigi Agentic Reasoning ({msg.thoughtSteps.length} steps)</span>
                            </span>
                            {thinkingExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                          </div>

                          {thinkingExpanded && (
                            <div className="thought-steps-list">
                              {msg.thoughtSteps.map((step, idx) => (
                                <div key={idx} className="thought-step-item">
                                  <span style={{ color: '#059669', fontWeight: 700 }}>✓</span>
                                  <span>{step}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Main AI Bubble */}
                      <div className="ai-text-bubble">
                        {msg.text}

                        {/* Interactive Agent Action Widget */}
                        {msg.hasAction && (
                          <div className="agent-action-box">
                            <div className="action-box-title">
                              <Sparkles size={14} color="#003E8A" />
                              <span>{msg.actionTitle}</span>
                            </div>
                            <div className="action-box-desc">{msg.actionDesc}</div>
                            <button 
                              type="button" 
                              className="btn-agent-execute"
                              onClick={() => triggerToast('₱35,000.00 Credit Line Activated Successfully!')}
                            >
                              <Zap size={13} />
                              <span>{msg.actionBtn}</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Chat Input Bar */}
            <form onSubmit={handleSendChat} className="ai-chat-input-bar">
              <button 
                type="button" 
                className="btn-ai-icon-tool"
                title="Attach Document / Receipt"
                onClick={() => triggerToast('Receipt attached for AI auto-logging')}
              >
                <Paperclip size={18} />
              </button>

              <input 
                type="text" 
                className="ai-chat-input-field"
                placeholder="Ask Gigi to log sales, analyze cash flow, or run actions..."
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
              />

              <button 
                type="button" 
                className="btn-ai-icon-tool"
                title="Voice Input"
                onClick={() => triggerToast('Voice recording active...')}
              >
                <Mic size={18} />
              </button>

              <button 
                type="submit" 
                className="btn-ai-send"
                title="Send instruction to Gigi"
              >
                <Send size={15} />
              </button>
            </form>

          </div>
        )}

        {/* Tab 6: INBOX Screen */}
        {activeTab === 'inbox' && (
          <div className="inbox-screen-container">
            <div className="inbox-header-row">
              <div className="inbox-title-wrap">
                <button 
                  type="button" 
                  className="passport-back-btn" 
                  onClick={navigateBack}
                  title="Go Back"
                >
                  <ArrowLeft size={19} />
                </button>
                <div className="inbox-screen-title">Inbox</div>
              </div>
              <button 
                type="button" 
                className="btn-link-action"
                style={{ background: 'none', border: 'none', color: 'var(--gcash-blue)', fontSize: '11px', fontWeight: 700, cursor: 'pointer' }}
                onClick={() => triggerToast('All notifications marked as read')}
              >
                Mark all as read
              </button>
            </div>

            {/* Filter Pills */}
            <div className="inbox-filter-pills">
              {['all', 'transactions', 'promos', 'system'].map((filter) => (
                <button 
                  key={filter} 
                  type="button" 
                  className={`inbox-filter-btn ${inboxFilter === filter ? 'active' : ''}`}
                  onClick={() => setInboxFilter(filter)}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>

            {/* Notifications List */}
            <div className="inbox-cards-list">
              {(inboxFilter === 'all' || inboxFilter === 'transactions') && (
                <div className="inbox-item-card unread" onClick={() => triggerToast('Opening Transaction Details...')}>
                  <div className="inbox-item-icon-box">
                    <CircleDollarSign size={20} />
                  </div>
                  <div className="inbox-item-content">
                    <div className="inbox-item-top">
                      <span className="inbox-item-title">Payment Received</span>
                      <span className="inbox-item-time">10m ago</span>
                    </div>
                    <div className="inbox-item-desc">You received ₱1,250.00 from John D. for Fresh Bangus purchase. Ref: TXN-894102</div>
                  </div>
                </div>
              )}

              {(inboxFilter === 'all' || inboxFilter === 'transactions') && (
                <div className="inbox-item-card" onClick={() => triggerToast('Opening Credit Details...')}>
                  <div className="inbox-item-icon-box">
                    <CreditCard size={20} />
                  </div>
                  <div className="inbox-item-content">
                    <div className="inbox-item-top">
                      <span className="inbox-item-title">GLoan Credit Increase</span>
                      <span className="inbox-item-time">2h ago</span>
                    </div>
                    <div className="inbox-item-desc">Congratulations Carla! Your available loan credit is now ₱20,000.00.</div>
                  </div>
                </div>
              )}

              {(inboxFilter === 'all' || inboxFilter === 'system') && (
                <div className="inbox-item-card" onClick={() => triggerToast('Opening Passport Tier Info...')}>
                  <div className="inbox-item-icon-box">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="inbox-item-content">
                    <div className="inbox-item-top">
                      <span className="inbox-item-title">Passport Tier 2 Verified</span>
                      <span className="inbox-item-time">Yesterday</span>
                    </div>
                    <div className="inbox-item-desc">DTI Business Permit verified successfully. You now enjoy Tier 2 fee discounts.</div>
                  </div>
                </div>
              )}

              {(inboxFilter === 'all' || inboxFilter === 'promos') && (
                <div className="inbox-item-card" onClick={() => triggerToast('Reward claimed to wallet!')}>
                  <div className="inbox-item-icon-box">
                    <Sparkles size={20} />
                  </div>
                  <div className="inbox-item-content">
                    <div className="inbox-item-top">
                      <span className="inbox-item-title">Merchant Weekly Reward</span>
                      <span className="inbox-item-time">2d ago</span>
                    </div>
                    <div className="inbox-item-desc">You reached 50 QR merchant transactions this week! Claim your ₱150 cashback bonus.</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 7: PAY QR / SCANNER Screen */}
        {activeTab === 'qr' && (
          <div className="qr-screen-container">
            <div className="inbox-header-row">
              <div className="inbox-title-wrap">
                <button 
                  type="button" 
                  className="passport-back-btn" 
                  onClick={navigateBack}
                  title="Go Back"
                >
                  <ArrowLeft size={19} />
                </button>
                <div className="inbox-screen-title">Pay & Receive QR</div>
              </div>
            </div>

            {/* Mode Selector */}
            <div className="qr-mode-selector">
              <button 
                type="button" 
                className={`qr-mode-tab ${qrMode === 'scan' ? 'active' : ''}`}
                onClick={() => setQrMode('scan')}
              >
                Scan Any QR
              </button>
              <button 
                type="button" 
                className={`qr-mode-tab ${qrMode === 'myqr' ? 'active' : ''}`}
                onClick={() => setQrMode('myqr')}
              >
                Generate My QR
              </button>
            </div>

            {qrMode === 'scan' ? (
              <div className="qr-scanner-card">
                <div className="qr-scanner-viewfinder">
                  <div className="qr-corner tl" />
                  <div className="qr-corner tr" />
                  <div className="qr-corner bl" />
                  <div className="qr-corner br" />
                  <div className="qr-laser-beam" />
                  <QrCode size={70} color="rgba(255,255,255,0.2)" />
                </div>
                <div style={{ textAlign: 'center', fontSize: '12px', color: '#94A3B8', lineHeight: 1.4 }}>
                  Align merchant or customer QR code inside the frame to pay or transfer funds instantly.
                </div>
                <div className="qr-scanner-controls">
                  <button 
                    type="button" 
                    className="qr-tool-btn"
                    onClick={() => triggerToast('Flashlight toggled')}
                  >
                    <Zap size={14} />
                    <span>Flashlight</span>
                  </button>
                  <button 
                    type="button" 
                    className="qr-tool-btn"
                    onClick={() => triggerToast('Select QR image from photo gallery')}
                  >
                    <Camera size={14} />
                    <span>Upload QR</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="qr-my-code-card">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 800, color: '#0F172A' }}>
                    Carla’s Fresh Seafood
                  </div>
                  <div style={{ fontSize: '11px', color: '#64748B', marginTop: '2px' }}>
                    GCash Negosyo Merchant QR • +63 917 123 4567
                  </div>
                </div>

                <div className="qr-code-display-box">
                  <QrCode size={180} color="#005CEE" />
                </div>

                <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                  <button 
                    type="button" 
                    className="btn-agent-execute" 
                    style={{ flex: 1, height: '40px', fontSize: '12px' }}
                    onClick={() => triggerToast('QR Code saved to photos')}
                  >
                    <Download size={14} />
                    <span>Save QR</span>
                  </button>
                  <button 
                    type="button" 
                    className="btn-agent-execute" 
                    style={{ flex: 1, height: '40px', background: '#EFF6FF', color: 'var(--gcash-blue)', border: '1px solid #BFDBFE', fontSize: '12px' }}
                    onClick={() => triggerToast('QR Code link copied to clipboard')}
                  >
                    <Share2 size={14} />
                    <span>Share QR</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 8: CARDS / WALLET Screen */}
        {activeTab === 'cards' && (
          <div className="cards-screen-container">
            <div className="inbox-header-row">
              <div className="inbox-title-wrap">
                <button 
                  type="button" 
                  className="passport-back-btn" 
                  onClick={navigateBack}
                  title="Go Back"
                >
                  <ArrowLeft size={19} />
                </button>
                <div className="inbox-screen-title">GCash Cards & Wallet</div>
              </div>
            </div>

            {/* Visual GCash Visa Debit Card */}
            <div className="debit-card-visual">
              <div className="debit-card-top">
                <span className="debit-card-brand">GCash Negosyo</span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: cardLocked ? '#FCA5A5' : '#86EFAC' }}>
                  {cardLocked ? '● FROZEN' : '● ACTIVE'}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '4px 0' }}>
                <div className="debit-card-chip" />
                <Wifi size={18} style={{ transform: 'rotate(90deg)', opacity: 0.8 }} />
              </div>

              <div className="debit-card-number">
                {showCardDetails ? '4821 9012 3341 8590' : '•••• •••• •••• 8590'}
              </div>

              <div className="debit-card-bottom">
                <div>
                  <div className="debit-card-holder-label">Cardholder</div>
                  <div className="debit-card-holder-name">CARLA REYES</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="debit-card-holder-label">Expires</div>
                  <div className="debit-card-expiry">08/29</div>
                </div>
              </div>
            </div>

            {/* Card Controls */}
            <div className="card-control-grid">
              <button 
                type="button" 
                className="card-control-btn"
                onClick={() => {
                  setCardLocked(!cardLocked);
                  triggerToast(cardLocked ? 'GCash Card unlocked' : 'GCash Card temporarily frozen');
                }}
              >
                {cardLocked ? <Unlock size={18} color="var(--gcash-blue)" /> : <Lock size={18} color="#E11D48" />}
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>{cardLocked ? 'Unlock Card' : 'Freeze Card'}</div>
                  <div style={{ fontSize: '10px', color: '#64748B' }}>{cardLocked ? 'Enable card' : 'Disable all txns'}</div>
                </div>
              </button>

              <button 
                type="button" 
                className="card-control-btn"
                onClick={() => {
                  setShowCardDetails(!showCardDetails);
                  triggerToast(showCardDetails ? 'Card details hidden' : 'Card details revealed');
                }}
              >
                <Eye size={18} color="var(--gcash-blue)" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#0F172A' }}>{showCardDetails ? 'Hide Details' : 'Show Details'}</div>
                  <div style={{ fontSize: '10px', color: '#64748B' }}>Card number & CVV</div>
                </div>
              </button>
            </div>

            {/* Linked Accounts */}
            <div className="profile-menu-section">
              <div style={{ padding: '12px 16px', fontSize: '12px', fontWeight: 700, color: '#64748B', borderBottom: '1px solid #F1F5F9' }}>
                Linked Bank Accounts & Wallets
              </div>
              <div className="profile-menu-item">
                <div className="profile-menu-left">
                  <div className="profile-menu-icon"><Building2 size={16} /></div>
                  <div>
                    <div className="profile-menu-label">BPI Business Checking</div>
                    <div className="profile-menu-sub">•••• 1948 • Auto-Debit Enabled</div>
                  </div>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#059669' }}>Connected</span>
              </div>
              <div className="profile-menu-item">
                <div className="profile-menu-left">
                  <div className="profile-menu-icon"><Building2 size={16} /></div>
                  <div>
                    <div className="profile-menu-label">BDO Savings Account</div>
                    <div className="profile-menu-sub">•••• 5820 • Verified</div>
                  </div>
                </div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#059669' }}>Connected</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 9: PROFILE / ACCOUNT Screen */}
        {activeTab === 'profile' && (
          <div className="profile-screen-container">
            <div className="inbox-header-row">
              <div className="inbox-title-wrap">
                <button 
                  type="button" 
                  className="passport-back-btn" 
                  onClick={navigateBack}
                  title="Go Back"
                >
                  <ArrowLeft size={19} />
                </button>
                <div className="inbox-screen-title">My Business Profile</div>
              </div>
            </div>

            {/* Hero Profile Card */}
            <div className="profile-hero-card">
              <div className="profile-hero-avatar-wrap">
                <img src={idPhoto} alt="Carla Reyes" className="profile-hero-avatar" />
              </div>
              <div className="profile-hero-info">
                <div className="profile-hero-name">Carla Reyes</div>
                <div className="profile-hero-phone">+63 917 123 4567</div>
                <div className="profile-hero-tier">
                  <BadgeCheck size={12} />
                  <span>Level 2 Fully Verified SME</span>
                </div>
              </div>
            </div>

            {/* Menu List */}
            <div className="profile-menu-section">
              <button 
                type="button" 
                className="profile-menu-item"
                onClick={() => {
                  navigateTo('passport');
                  triggerToast('Opening Negosyo Passport...');
                }}
              >
                <div className="profile-menu-left">
                  <div className="profile-menu-icon"><Globe size={16} /></div>
                  <div>
                    <div className="profile-menu-label">Negosyo Passport</div>
                    <div className="profile-menu-sub">Business profile, credentials & verification</div>
                  </div>
                </div>
                <ChevronRight size={16} color="#94A3B8" />
              </button>

              <button 
                type="button" 
                className="profile-menu-item"
                onClick={() => {
                  navigateTo('health');
                  triggerToast('Opening Business Health...');
                }}
              >
                <div className="profile-menu-left">
                  <div className="profile-menu-icon"><HeartPulse size={16} /></div>
                  <div>
                    <div className="profile-menu-label">Business Health Analytics</div>
                    <div className="profile-menu-sub">Cash flow, margins & financial scores</div>
                  </div>
                </div>
                <ChevronRight size={16} color="#94A3B8" />
              </button>

              <button 
                type="button" 
                className="profile-menu-item"
                onClick={() => triggerToast('Security settings: MPIN & Biometrics are active')}
              >
                <div className="profile-menu-left">
                  <div className="profile-menu-icon"><ShieldCheck size={16} /></div>
                  <div>
                    <div className="profile-menu-label">Security & Biometrics</div>
                    <div className="profile-menu-sub">Change MPIN, Face ID & 2-factor login</div>
                  </div>
                </div>
                <ChevronRight size={16} color="#94A3B8" />
              </button>

              <button 
                type="button" 
                className="profile-menu-item"
                onClick={() => triggerToast('Help Center: 24/7 GCash Business Care')}
              >
                <div className="profile-menu-left">
                  <div className="profile-menu-icon"><HelpCircle size={16} /></div>
                  <div>
                    <div className="profile-menu-label">Help & Support</div>
                    <div className="profile-menu-sub">FAQs, submit tickets, contact live care</div>
                  </div>
                </div>
                <ChevronRight size={16} color="#94A3B8" />
              </button>

              <button 
                type="button" 
                className="profile-menu-item"
                onClick={onLogout}
              >
                <div className="profile-menu-left">
                  <div className="profile-menu-icon" style={{ background: '#FFE4E6', color: '#E11D48' }}><LogOut size={16} /></div>
                  <div>
                    <div className="profile-menu-label" style={{ color: '#E11D48' }}>Log Out</div>
                    <div className="profile-menu-sub">End current session</div>
                  </div>
                </div>
                <ChevronRight size={16} color="#94A3B8" />
              </button>
            </div>
          </div>
        )}

      </div>

      {/* BOTTOM NAVIGATION BAR (Authentic GCash 5 Tabs) */}
      {activeTab !== 'gchat' && (
        <nav className="gcash-bottom-nav" aria-label="Bottom Navigation">
          
          {/* 1. HOME */}
          <button
            type="button"
            className={`nav-tab-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => resetToTab('home')}
          >
            <div className="nav-icon-wrapper">
              <Home size={20} />
            </div>
            <span>Home</span>
          </button>

          {/* 2. INBOX */}
          <button
            type="button"
            className={`nav-tab-item ${activeTab === 'inbox' ? 'active' : ''}`}
            onClick={() => resetToTab('inbox')}
          >
            <div className="nav-icon-wrapper">
              <Mail size={20} />
              <span className="nav-unread-dot" />
            </div>
            <span>Inbox</span>
          </button>

          {/* 3. PAY QR */}
          <button
            type="button"
            className={`nav-tab-item ${activeTab === 'qr' ? 'active' : ''}`}
            onClick={() => resetToTab('qr')}
          >
            <div className="nav-icon-wrapper">
              <QrCode size={20} />
            </div>
            <span>Pay QR</span>
          </button>

          {/* 4. CARDS */}
          <button
            type="button"
            className={`nav-tab-item ${activeTab === 'cards' ? 'active' : ''}`}
            onClick={() => resetToTab('cards')}
          >
            <div className="nav-icon-wrapper">
              <CreditCard size={20} />
            </div>
            <span>Cards</span>
          </button>

          {/* 5. PROFILE */}
          <button
            type="button"
            className={`nav-tab-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => resetToTab('profile')}
          >
            <div className="nav-icon-wrapper">
              <User size={20} />
            </div>
            <span>Profile</span>
          </button>

        </nav>
      )}

    </div>
  );
}
