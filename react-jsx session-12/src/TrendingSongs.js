import { useEffect, useState } from 'react';

export default function TrendingSongs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs([
      'Perfect - Ed Sheeran',
      'Shape of You - Ed Sheeran',
      'Believer - Imagine Dragons',
      'Calm Down - Rema',
      'Kesariya - Arijit Singh'
    ]);
  }, []);

  return (
    <div className="card p-4 mb-4">
      <h3>Trending Songs</h3>

      <ul>
        {songs.map((song, index) => (
          <li key={index}>{song}</li>
        ))}
      </ul>

      <button className="btn btn-primary">
        Reload
      </button>
    </div>
  );
}