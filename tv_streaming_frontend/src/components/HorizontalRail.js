import React, { useRef, useState, useEffect } from 'react';
import ContentTile from './ContentTile';

// PUBLIC_INTERFACE
export default function HorizontalRail({ title, items = [], onEnter }) {
  const trackRef = useRef(null);
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    // Ensure focused tile is scrolled into view on change
    const node = trackRef.current?.children?.[focusIndex + 0]; // +0 skip nothing, first child is tile due to padding via CSS
    if (node && node.scrollIntoView) {
      node.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
    }
  }, [focusIndex]);

  const scrollBy = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = 360 * 3; // roughly 3 tiles
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      setFocusIndex((i) => Math.min(items.length - 1, i + 1));
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      setFocusIndex((i) => Math.max(0, i - 1));
      e.preventDefault();
    } else if (e.key === 'Enter') {
      const item = items[focusIndex];
      onEnter && item && onEnter(item);
    }
  };

  return (
    <section className="rail section" onKeyDown={handleKeyDown}>
      <div className="rail-header container-pad">
        <div className="rail-title">{title}</div>
      </div>
      <div className="rail-track" ref={trackRef} role="listbox" aria-label={`${title} rail`}>
        <button
          className="scroll-btn left"
          aria-label="Scroll left"
          onClick={() => scrollBy(-1)}
        >
          ◀
        </button>
        {items.map((it, idx) => (
          <ContentTile
            key={it.id}
            item={it}
            onEnter={onEnter}
            focused={idx === focusIndex}
          />
        ))}
        <button
          className="scroll-btn right"
          aria-label="Scroll right"
          onClick={() => scrollBy(1)}
        >
          ▶
        </button>
      </div>
    </section>
  );
}
