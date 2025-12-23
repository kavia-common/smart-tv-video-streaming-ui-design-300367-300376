import React from 'react';

// PUBLIC_INTERFACE
export default function TopBar({ title = 'Home', onSearch }) {
  return (
    <header className="topbar" role="banner">
      <div className="title" aria-live="polite">{title}</div>
      <div className="spacer" />
      <button
        className="btn"
        aria-label="Search"
        onClick={() => onSearch && onSearch()}
      >
        🔎 <span style={{ opacity: 0.85 }}>Search</span>
      </button>
      <button
        className="btn"
        aria-label="Profile"
        onClick={() => {}}
      >
        👤
      </button>
    </header>
  );
}
