import React, { useState } from 'react';

// PUBLIC_INTERFACE
export default function Search() {
  const [q, setQ] = useState('');
  return (
    <div className="content container-pad" role="main">
      <h2>Search</h2>
      <div className="topbar search" style={{ marginTop: 12, background: 'transparent', border: 'none', padding: 0 }}>
        <label htmlFor="query" className="sr-only" style={{ position: 'absolute', left: -9999 }}>
          Search query
        </label>
        <input
          id="query"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search titles, genres, people..."
          aria-label="Search input"
          style={{
            background: 'var(--tileBg)',
            border: '1px solid var(--border)',
            color: 'var(--text)',
            borderRadius: 12,
            padding: '12px 14px',
            minWidth: 360,
            outline: 'none',
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              // eslint-disable-next-line no-console
              console.log('Searching for', q);
            }
          }}
        />
      </div>
      <p style={{ color: 'var(--textMuted)' }}>Type to search. Results will appear here.</p>
    </div>
  );
}
