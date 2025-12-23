import React, { useRef, useEffect } from 'react';

// PUBLIC_INTERFACE
export default function ContentTile({ item, onEnter, focused }) {
  const ref = useRef(null);

  useEffect(() => {
    if (focused && ref.current) {
      ref.current.focus();
    }
  }, [focused]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onEnter && onEnter(item);
    }
  };

  return (
    <div
      ref={ref}
      className="tile"
      role="button"
      aria-label={item?.title || 'Content'}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={() => onEnter && onEnter(item)}
    >
      <img src={item.img} alt={item.title} />
      <div className="meta" aria-hidden="false">
        <span>{item.title}</span>
        <span style={{ opacity: 0.85 }}>{item.meta || item.rating || ''}</span>
      </div>
      {item.progress > 0 && (
        <div className="progress" aria-label={`Progress ${Math.round(item.progress * 100)} percent`}>
          <div className="bar" style={{ width: `${Math.min(100, Math.round(item.progress * 100))}%` }} />
        </div>
      )}
    </div>
  );
}
