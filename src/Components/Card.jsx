
import './Card.css';

const Cards = () => {
  return (
    <div className="stats-cards-grid">
      
      {/* Card 1: Total Tasks */}
      <div className="stat-card">
        <div className="card-top-row">
          <span className="card-title">Total Tasks</span>
          <div className="card-badge-icon" style={{ backgroundColor: 'rgba(255, 107, 0, 0.15)', color: '#ff6b00' }}>
            <i className="fa-regular fa-clipboard"></i>
          </div>
        </div>
        <div className="card-value">4,875</div>
        <div className="card-change positive">↑ 12.5% from last month</div>
        <div className="card-sparkline">
          <svg viewBox="0 0 100 25" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad-1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ff6b00" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d="M 0,20 Q 15,5 30,18 T 60,10 T 80,15 T 100,5 L 100,25 L 0,25 Z" fill="url(#grad-1)" />
            <path d="M 0,20 Q 15,5 30,18 T 60,10 T 80,15 T 100,5" fill="none" stroke="#ff6b00" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Card 2: Completed Tasks */}
      <div className="stat-card">
        <div className="card-top-row">
          <span className="card-title">Completed Tasks</span>
          <div className="card-badge-icon" style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
            <i className="fa-regular fa-circle-check"></i>
          </div>
        </div>
        <div className="card-value">3,210</div>
        <div className="card-change positive">↑ 18.4% from last month</div>
        <div className="card-sparkline">
          <svg viewBox="0 0 100 25" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad-2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ff6b00" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d="M 0,20 Q 15,5 30,18 T 60,10 T 80,15 T 100,5 L 100,25 L 0,25 Z" fill="url(#grad-2)" />
            <path d="M 0,20 Q 15,5 30,18 T 60,10 T 80,15 T 100,5" fill="none" stroke="#ff6b00" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Card 3: Active Users with Tasks */}
      <div className="stat-card">
        <div className="card-top-row">
          <span className="card-title">Active Users with Tasks</span>
          <div className="card-badge-icon" style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}>
            <i className="fa-regular fa-user"></i>
          </div>
        </div>
        <div className="card-value">1,234</div>
        <div className="card-change negative">↓ -4.7% from last month</div>
        <div className="card-sparkline">
          <svg viewBox="0 0 100 25" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad-3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ff6b00" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d="M 0,20 Q 15,5 30,18 T 60,10 T 80,15 T 100,5 L 100,25 L 0,25 Z" fill="url(#grad-3)" />
            <path d="M 0,20 Q 15,5 30,18 T 60,10 T 80,15 T 100,5" fill="none" stroke="#ff6b00" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Card 4: Pending Approvals */}
      <div className="stat-card">
        <div className="card-top-row">
          <span className="card-title">Pending Approvals</span>
          <div className="card-badge-icon" style={{ backgroundColor: 'rgba(234, 179, 8, 0.15)', color: '#eab308' }}>
            <i className="fa-regular fa-clock"></i>
          </div>
        </div>
        <div className="card-value">113</div>
        <div className="card-change negative">↓ -5.3% from last month</div>
        <div className="card-sparkline">
          <svg viewBox="0 0 100 25" preserveAspectRatio="none">
            <defs>
              <linearGradient id="grad-4" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ff6b00" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path d="M 0,20 Q 15,5 30,18 T 60,10 T 80,15 T 100,5 L 100,25 L 0,25 Z" fill="url(#grad-4)" />
            <path d="M 0,20 Q 15,5 30,18 T 60,10 T 80,15 T 100,5" fill="none" stroke="#ff6b00" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

    </div>
  );
};

export  {Cards};