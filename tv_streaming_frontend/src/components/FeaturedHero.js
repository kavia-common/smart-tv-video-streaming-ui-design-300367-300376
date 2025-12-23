import React from 'react';

// PUBLIC_INTERFACE
export default function FeaturedHero({ item, onPlay, onAdd }) {
  if (!item) return null;
  return (
    <section className="hero container-pad" aria-label="Featured">
      <div
        className="backdrop"
        style={{ backgroundImage: `url(${item.backdrop})` }}
        role="img"
        aria-label={`${item.title} backdrop`}
      />
      <div className="scrim" />
      <div className="info">
        <div className="title">{item.title}</div>
        <div className="desc">{item.description}</div>
        <div className="tags" aria-label="Tags">
          {item.tags?.map((t) => (
            <div key={t} className="tag">{t}</div>
          ))}
        </div>
        <div className="cta-row">
          <button
            className="btn primary"
            onClick={() => onPlay && onPlay(item)}
            aria-label="Play featured"
          >
            ▶ Play
          </button>
          <button
            className="btn"
            onClick={() => onAdd && onAdd(item)}
            aria-label="Add to My List"
          >
            ➕ My List
          </button>
        </div>
      </div>
    </section>
  );
}
