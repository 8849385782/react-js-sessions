import LoginForm from "./LoginForm";
import SearchBar from "./SearchBar";
import AddToPlaylist from "./AddToPlaylist";
import FeedbackForm from "./FeedbackForm";
import "./App.css";

export default function App() {
  return (
    <div className="container py-4">
      <h2>React Forms Assignment</h2>

      <div className="row g-4 mt-2">
        <div className="col-md-6">
          <LoginForm />
        </div>

        <div className="col-md-6">
          <SearchBar />
        </div>

        <div className="col-md-6">
          <AddToPlaylist />
        </div>

        <div className="col-md-6">
          <FeedbackForm />
        </div>
      </div>
    </div>
  );
}