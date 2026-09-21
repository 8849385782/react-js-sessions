import Playlist from './Playlist';
import OrderStatus from './OrderStatus';
import './App.css';

const songs = [
  { title: 'Shape of You', artist: 'Ed Sheeran' },
  { title: 'Perfect', artist: 'Ed Sheeran' },
  { title: 'Believer', artist: 'Imagine Dragons' }
];

const products = ['Pizza', 'Burger', 'Pasta', 'Sandwich'];

export default function App() {
  return (
    <div className="container py-4">
      <h2>Lists & Conditional Rendering Assignment</h2>

      <Playlist songs={songs} />

      <OrderStatus products={products} />
    </div>
  );
}