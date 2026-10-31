
import './Charts.css';

const Charts= () => {
  const barData = [
    { name: 'Ali', height: '65%' },
    { name: 'Sara', height: '78%' },
    { name: 'Sara', height: '75%' },
    { name: 'Leo', height: '92%', active: true },
    { name: 'Alex', height: '88%' },
    { name: 'Jordan', height: '80%' },
    { name: 'Pat', height: '88%' },
    { name: 'Sam', height: '75%' },
    { name: 'Kim', height: '80%' },
    { name: 'Taylor', height: '70%' },
    { name: 'Lee', height: '80%' },
  ];

  return (
    <div className="charts-section-grid">
      
      {/* Left: Task Completion Trend (Bar Chart) */}
      <div className="chart-card">
        <div className="chart-header">
          <div className="chart-title-area">
            <h3>Task Completion Trend</h3>
          </div>
          <div className="chart-dropdown">
            <select defaultValue="Current Quarter">
              <option value="Current Quarter">Current Quarter</option>
              <option value="Last Quarter">Last Quarter</option>
            </select>
          </div>
        </div>

        <div className="bar-chart-container">
          <div className="y-axis-labels">
            <span>100</span>
            <span>80</span>
            <span>60</span>
            <span>40</span>
            <span>20</span>
            <span>0</span>
          </div>

          <div className="bars-wrapper">
            {barData.map((bar, index) => (
              <div className="bar-item" key={index}>
                {bar.active && <span className="bar-tooltip">Alex<br/>92%</span>}
                <div 
                  className={`bar-fill ${bar.active ? 'active-bar' : ''}`} 
                  style={{ height: bar.height }}
                ></div>
                <span className="bar-label">{bar.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Task Categories (Donut Chart) */}
      <div className="chart-card">
        <div className="chart-header">
          <div className="chart-title-area">
            <h3>Task Categories</h3>
          </div>
          <div className="chart-dropdown">
            <select defaultValue="This Month">
              <option value="This Month">This Month</option>
              <option value="All Time">All Time</option>
            </select>
          </div>
        </div>

        <div className="donut-chart-container">
          <div className="donut-visual">
            <svg viewBox="0 0 36 36" className="donut-svg">
              {/* Segment 1: Product Development (Orange) */}
              <circle
                className="donut-ring-segment segment-1"
                cx="18" cy="18" r="14"
                fill="transparent"
                stroke="#ff6b00"
                strokeWidth="4"
                strokeDasharray="45 100"
                strokeDashoffset="0"
              />
              {/* Segment 2: Marketing (Light Orange/Peach) */}
              <circle
                className="donut-ring-segment segment-2"
                cx="18" cy="18" r="14"
                fill="transparent"
                stroke="#f97316"
                strokeWidth="4"
                strokeDasharray="25 100"
                strokeDashoffset="-45"
              />
              {/* Segment 3: Client Services (Muted Dark Orange) */}
              <circle
                className="donut-ring-segment segment-3"
                cx="18" cy="18" r="14"
                fill="transparent"
                stroke="#c2410c"
                strokeWidth="4"
                strokeDasharray="15 100"
                strokeDashoffset="-70"
              />
              {/* Segment 4: Research & Operations (Muted Gray/Navy) */}
              <circle
                className="donut-ring-segment segment-4"
                cx="18" cy="18" r="14"
                fill="transparent"
                stroke="#334155"
                strokeWidth="4"
                strokeDasharray="15 100"
                strokeDashoffset="-85"
              />
            </svg>
          </div>

          <div className="donut-legend">
            <div className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: '#ff6b00' }}></span>
              <span className="legend-text">Product Development</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: '#f97316' }}></span>
              <span className="legend-text">Marketing</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: '#c2410c' }}></span>
              <span className="legend-text">Client Services</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: '#78716c' }}></span>
              <span className="legend-text">Research</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot" style={{ backgroundColor: '#334155' }}></span>
              <span className="legend-text">Operations</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export {Charts};