import './App.css';
import LikeButton from './LikeButton';
import SearchBar from './SearchBar';
import LoginForm from './LoginForm';
import PlaylistAdder from './PlaylistAdder';

export default function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        React Event Handling Assignment
      </h1>

      <div className="row g-4">
        <div className="col-md-6">
          <LikeButton />
        </div>

        <div className="col-md-6">
          <SearchBar />
        </div>

        <div className="col-md-6">
          <LoginForm />
        </div>

        <div className="col-md-6">
          <PlaylistAdder />
        </div>
      </div>
    </div>
  );
}