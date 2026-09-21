import MovieList from './MovieList';
import AddPlaylist from './AddPlaylist';
import RestaurantSearch from './RestaurantSearch';
import AddComment from './AddComment';

export default function App() {
  return (
    <div className="container py-4">
      <h2>Axios & API Integration Assignment</h2>
      <MovieList />
      <AddPlaylist />
      <RestaurantSearch />
      <AddComment />
    </div>
  );
}
