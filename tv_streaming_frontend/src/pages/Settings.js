import React, { useState, useEffect } from 'react';

// PUBLIC_INTERFACE
export default function Settings() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className="content container-pad" role="main">
      <h2>Settings</h2>
      <div style={{ marginTop: 16 }}>
        <label htmlFor="theme" style={{ marginRight: 12 }}>Theme</label>
        <select
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          aria-label="Theme selection"
          style={{
            background: 'var(--tileBg)',
            color: 'var(--text)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            padding: '8px 10px'
          }}
        >
          <option value="dark">Dark</option>
          <option value="light">Light (preview)</option>
        </select>
      </div>
      <div style={{ marginTop: 24, color: 'var(--textMuted)' }}>
        App uses mock data by default. API base: {process.env.REACT_APP_API_BASE || 'N/A'}
      </div>
    </div>
  );
}
