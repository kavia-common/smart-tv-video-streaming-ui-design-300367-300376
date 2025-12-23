import React from 'react';
import FeaturedHero from '../components/FeaturedHero';
import HorizontalRail from '../components/HorizontalRail';
import { featured, rails } from '../mockData';

// PUBLIC_INTERFACE
export default function Home() {
  const handlePlay = (item) => {
    // Placeholder for player route
    // eslint-disable-next-line no-console
    console.log('Play', item?.title);
  };
  const handleAdd = (item) => {
    // eslint-disable-next-line no-console
    console.log('Add to My List', item?.title);
  };
  const handleEnter = (item) => {
    // eslint-disable-next-line no-console
    console.log('Open details', item?.title);
  };

  return (
    <div className="content" role="main">
      <FeaturedHero item={featured} onPlay={handlePlay} onAdd={handleAdd} />
      {rails.map((r) => (
        <HorizontalRail
          key={r.id}
          title={r.title}
          items={r.items}
          onEnter={handleEnter}
        />
      ))}
    </div>
  );
}
