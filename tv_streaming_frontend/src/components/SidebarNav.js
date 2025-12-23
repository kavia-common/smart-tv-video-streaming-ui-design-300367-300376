import React from 'react';
import { NavLink } from 'react-router-dom';

// Simple icon placeholders
const Icon = ({ label }) => <span aria-hidden="true">{label}</span>;

// PUBLIC_INTERFACE
export default function SidebarNav() {
  const items = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/search', label: 'Search', icon: '🔎' },
    { path: '/my-list', label: 'My List', icon: '⭐' },
    { path: '/settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="sidebar" aria-label="Primary Navigation">
      <div className="logo" aria-label="App logo">TV</div>
      {items.map((it) => (
        <NavLink
          key={it.path}
          to={it.path}
          className={({ isActive }) => `nav-btn${isActive ? ' active' : ''}`}
          aria-label={it.label}
          aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          tabIndex={0}
        >
          <Icon label={it.icon} />
        </NavLink>
      ))}
    </aside>
  );
}
