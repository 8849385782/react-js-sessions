import "./App.css";
import TrendingSongs from "./TrendingSongs";
import IPLScoreFetcher from "./IPLScoreFetcher";
import MovieSuggestions from "./MovieSuggestions";
import AutoFetchComponent from "./AutoFetchComponent";

export default function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        React useEffect Assignment
      </h2>

      <div className="row g-3">
        <div className="col-md-6">
          <TrendingSongs />
        </div>

        <div className="col-md-6">
          <IPLScoreFetcher />
        </div>

        <div className="col-md-6">
          <MovieSuggestions />
        </div>

        <div className="col-md-6">
          <AutoFetchComponent />
        </div>
      </div>
    </div>
  );
}