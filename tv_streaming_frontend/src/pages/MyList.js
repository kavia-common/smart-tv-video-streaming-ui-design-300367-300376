import React from 'react';

// PUBLIC_INTERFACE
export default function MyList() {
  return (
    <div className="content container-pad" role="main">
      <h2>My List</h2>
      <p style={{ color: 'var(--textMuted)' }}>You have no saved items yet.</p>
    </div>
  );
}
