import React from 'react';
import './home.css';
import { useLocation } from 'wouter';

export default function Home() {
  const [location, setLocation] = useLocation();

  console.log(location);

  return (
    <section className="home">
      <div>
        <button className="button" onClick={() => setLocation('/audio')}>
          MP3 Audio
        </button>
      </div>

      <div>
        <button className="button" onClick={() => setLocation('/excel')}>
          Excel
        </button>
      </div>

      <div>
        <button className="button" onClick={() => setLocation('/pdf')}>
          PDF
        </button>
      </div>

      <div>
        <button className="button" onClick={() => setLocation('/powerpoint')}>
          PowerPoint
        </button>
      </div>

      <div>
        <button className="button" onClick={() => setLocation('/video')}>
          MP4 Video
        </button>
      </div>

      <div>
        <button className="button" onClick={() => setLocation('/wexbim')}>
          Wexbim
        </button>
      </div>

      <div>
        <button className="button" onClick={() => setLocation('/word')}>
          MS Word
        </button>
      </div>
    </section>
  );
}
